// Built as closely as possible to the Python implementation here:
// https://github.com/xSke/resim/blob/main/rng_solver.py

const MASK = 0xFFFFFFFFFFFFFFFFn;
const MAX_KERNEL_BASIS_SIZE = 20;


const __STATE_MATRICES_CACHE = [];
/**
 * Develop the bit matrices which define state spaces
 */
function state_matrices(i) {
  if (i in __STATE_MATRICES_CACHE) {
    return __STATE_MATRICES_CACHE[i];
  }
  if (i === 0) {
    // Start with initial state
    return initial_state_matrices();
  }
  __STATE_MATRICES_CACHE[i] = xs128p_matrix(...state_matrices(i - 1));
  return __STATE_MATRICES_CACHE[i];
}

/**
 * As bits, initial state matrices look like weird offset identity matrices.
 *  The results are 128 bits wide and 64 rows tall, but at a smaller scale
 *  they look like this:
 *
 *                       state0              state1
 *
 *                      10000000            00001000
 *                      01000000            00000100
 *                      00100000            00000010
 *                      00010000            00000001
 */
function initial_state_matrices() {
  const state0 = [];
  const state1 = [];
  for (let i = 0n; i < 64n; i++) {
    state0.push(1n << (127n - i));
    state1.push(1n << (127n - (64n + i)));
  }
  return [state0, state1];
}

/**
 * Equivalent to Xorshift128+ implementation across matrices of states.
 */
function xs128p_matrix(state0_matrix, state1_matrix) {
  state0_matrix = [...state0_matrix];
  state1_matrix = [...state1_matrix];
  let [s1, s0] = [state0_matrix, state1_matrix];
  s1 = xor_matrix(s1, lshift_matrix(s1, 23));
  s1 = xor_matrix(s1, rshift_matrix(s1, 17));
  s1 = xor_matrix(s1, s0);
  s1 = xor_matrix(s1, rshift_matrix(s0, 26));
  state0_matrix = state1_matrix;
  state1_matrix = s1;
  return [state0_matrix, state1_matrix];
}

/**
 * "left-shift" the bit matrix by sliding it up N rows
 */
function lshift_matrix(matrix, n) {
  return matrix.slice(n).concat(Array(n).fill(0n));
}

/**
 * "right-shift" the bit matrix by sliding it down N rows
 */
function rshift_matrix(matrix, n) {
  return Array(n).fill(0n).concat(matrix.slice(0, -1 * n));
}

/**
 * XOR two bit matrices together, row-wise
 */
function xor_matrix(matrix1, matrix2) {
  const result = [];
  for (let i = 0; i < Math.min(matrix1.length, matrix2.length); i++) {
    result.push(matrix1[i] ^ matrix2[i]);
  }
  return result;
}

/**
 * Reduced Row Echelon Form (RREF) of a matrix
 */
function rref(matrix, n) {
  matrix = [...matrix];
  const num_rows = matrix.length;
  let next_row = 0;
  for (let col = 0; col < n; col++) {
    for (let row = next_row; row < num_rows; row++) {
      if ((matrix[row] >> BigInt(n - 1 - col)) & 1n) {
        [matrix[row], matrix[next_row]] = [matrix[next_row], matrix[row]];
        for (let i = 0; i < num_rows; i++) {
          if (i !== next_row && (matrix[i] >> BigInt(n - 1 - col)) & 1n) {
            matrix[i] ^= matrix[next_row];
          }
        }
        next_row++;
        if (next_row === num_rows) {
          return matrix;
        }
        break;
      }
    }
  }
  return matrix;
}

/**
 * Transposes a bit matrix. Assumes the input matrix is 128 bits wide.
 */
function transpose(matrix) {
  const num_rows = matrix.length;
  const flipped = [];
  for (let i = 0; i < 128; i++) {
    let cell = 0n;
    for (let j = 0; j < num_rows; j++) {
      cell += ((matrix[j] >> BigInt(127 - i)) & 1n) << BigInt(num_rows - 1 - j);
    }
    flipped.push(cell);
  }
  return flipped;
}

/**
 * Given [1, 2], returns [(), (1,), (2,), (1, 2)]
 *
 * Implementation from https://stackoverflow.com/a/42773837
 */
function* powerset(array, offset = 0) {
  while (offset < array.length) {
    let first = array[offset++];
    for (let subset of powerset(array, offset)) {
      subset.push(first);
      yield subset;
    }
  }
  yield [];
}

/**
 * Xorshift128+ implementation
 */
function xs128p(state0, state1) {
  let s1 = state0 & MASK;
  let s0 = state1 & MASK;
  s1 ^= (s1 << 23n) & MASK;
  s1 ^= (s1 >> 17n) & MASK;
  s1 ^= s0 & MASK;
  s1 ^= (s0 >> 26n) & MASK;
  state0 = state1 & MASK;
  state1 = s1 & MASK;
  return [state0, state1];
}

function state_to_double(s0) {
  const dataView = new DataView((new Float64Array(1)).buffer);
  dataView.setBigInt64(0, (s0 >> 12n) | 0x3FF0000000000000n);
  return dataView.getFloat64() - 1;
}

function get_mantissa(val) {
  if (val === 1.0) {
    return MASK >> 12n;
  }
  const dataView = new DataView((new Float64Array(1)).buffer);
  dataView.setFloat64(0, 1 + val);
  return dataView.getBigInt64() & 0x000FFFFFFFFFFFFFn;
}

function int_to_bits(n, length) {
  return [...Array(length).keys()].map(i => (n >> BigInt(length - i - 1)) & 1n);
}

function bits_to_int(bits) {
  return parseInt(bits.join(''), 2);
}

function print_matrix(M, n) {
  for (let row of M) {
    console.log(M.toString(2).padStart(n, '0'));
  }
  console.log('');
}

function bit_length(n) {
  let i = 0;
  while (n > 0) {
    i++;
    n >>= 1n;
  }
  return i;
}

function solve(knowns) {
  /**
   * Determine valid RNG states which could output float values matching knowns
   *
   * knowns: list of constraints for consecutive RNG float outputs
   * Each known can be:
   *     float               [known value between 0.0 and 1.0]
   *     (float, float)      [known range of (low, high) values]
   *     or None             [no constraint for this output]
   *
   * Returns list of all possible solutions (s0, s1), or [] if no solution found
   */

  const bits = [];
  const bits_matrix = [];

  for (let i = 0; i < knowns.length; i++) {
    let known = knowns[i];
    let [state0_matrix, _] = state_matrices(i);
    if (typeof(known) === 'number') {
      let mantissa = get_mantissa(known);
      let known_bits = 52;
      let mantissa_bits = int_to_bits(mantissa, known_bits);
      bits.push(...mantissa_bits);
      bits_matrix.push(...state0_matrix.slice(0, known_bits));
    } else if (Array.isArray(known)) {
      let [lo, hi] = known;
      let lo_mantissa = get_mantissa(lo);
      let hi_mantissa = get_mantissa(hi);
      known_bits = 52 - bit_length(lo_mantissa ^ hi_mantissa);
      bits.push(
        ...int_to_bits(
          lo_mantissa >> BigInt(52 - known_bits),
          known_bits,
        ),
      );
      bits_matrix.push(...state0_matrix.slice(0, known_bits));
    } else if (known === null) {
      // This is fine, just no bits of info are added
      continue;
    } else {
      throw new Error(`Unknown type for known ${known}`);
    }
  }

  const num_known_bits = bits.length;
  // console.log('solving...');

  // find kernel basis (homogeneous solutions)
  const kernel_basis = [];

  let M = transpose(bits_matrix);

  M = [...Array(128).keys()].map(i => (M[i] << 128n) + (1n << BigInt(127 - i)));
  M = rref(M, num_known_bits + 128);
  for (let row of M) {
    if (row >> 128n === 0n) {
      kernel_basis.push(row & ((1n << 128n) - 1n));
    }
  }


  const kernel_basis_size = kernel_basis.length;
  if (kernel_basis_size > 0) {
    console.log(
      `WARNING: ${2**kernel_basis_size} ` +
      `(2^${kernel_basis_size}) potential solutions`,
    );
    if (kernel_basis_size > MAX_KERNEL_BASIS_SIZE) {
      console.log('too many to bruteforce, giving up :(');
      return [];
    }
  }

  // find particular solution
  M = bits_matrix.map((n, i) => (n << 1n) + bits[i]);
  M = rref(M, 129);

  let particular_solution = 0n;
  for (let row of M) {
    if (row === 0n) {
      break;
    }
    if (row === 1n) {
      console.log('ERROR: contradiction found, no solution!');
      return [];
    }
    particular_solution += (row & 1n) << BigInt(bit_length(row) - 2);
  }

  const solutions = [];

  for (let homogeneous_solutions of powerset(kernel_basis)) {
    let solution = particular_solution;
    for (let vec of homogeneous_solutions) {
      solution ^= vec;
    }
    let s0 = solution >> 64n;
    let s1 = solution & ((1n << 64n) - 1n);
    let candidate_solution = [s0, s1];
    // test solution
    let solution_is_good = true;
    for (let known of knowns) {
      let value = state_to_double(s0);
      if (typeof(known) === 'number') {
        if (known !== value) {
          solution_is_good = false;
          break;
        }
      } else if (Array.isArray(known)) {
        let [low, high] = known;
        if (value <= low || high <= value) {
          solution_is_good = false;
          break;
        }
      }
      [s0, s1] = xs128p(s0, s1);
    }

    if (solution_is_good) {
      // good solution!
      // console.log('found solution', candidate_solution);
      solutions.push(candidate_solution);
    }
  }
  return solutions;
}


function test() {
  const knowns = [
      0.08109881677206165,  // baseThirst
      [0.855381, 0.855382], // buoyancy
      [0.877, 0.879],       // patheticism
      null,                 // musclitude
      null,                 // divinity
      0.8836552885826778,   // moxie
      [0.551, 0.553],       // thwackability
  ];
  console.log('knowns:', knowns);
  // s0,s1 at baseThirst generation
  const expected_solution = [[1496009117674886285n, 15779009155937865159n]];
  console.log('Running solve(knowns)...');
  const sol = solve(knowns);
  console.log(`got solutions: ${sol}`);
  if (sol.toString() === expected_solution.toString()) {
    console.log('test success: quack enjoyable!');
  } else {
    console.log('test fail');
  }
  console.log('');
}
