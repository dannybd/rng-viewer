// Built as closely as possible to the Python implementation here:
// https://github.com/xSke/resim/blob/main/rng_solver.py

// Each state is a 64-bit integer
const STATE_WIDTH = 64n;
// Solution space is two states wide, so 128
const SOLUTION_WIDTH = 2n * STATE_WIDTH;
// 128x128 identity matrix, precomputed
const IDENTITY128 = [...Array(Number(SOLUTION_WIDTH)).keys()]
  .map(i => 1n << BigInt(Number(SOLUTION_WIDTH) - 1 - i));
const STATE_MASK = 0xFFFFFFFFFFFFFFFFn;
const SOLUTION_MASK = STATE_MASK << STATE_WIDTH | STATE_MASK;
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
    // As bits, initial state matrices are the top and bottom halves
    // of a 128x128 identity matrix. At a smaller scale they look like this:
    //
    //                     state0              state1
    //
    //                    10000000            00001000
    //                    01000000            00000100
    //                    00100000            00000010
    //                    00010000            00000001
    return [
      IDENTITY128.slice(0, Number(STATE_WIDTH)),
      IDENTITY128.slice(Number(STATE_WIDTH)),
    ];
  }
  __STATE_MATRICES_CACHE[i] = xs128p_matrix(...state_matrices(i - 1));
  return __STATE_MATRICES_CACHE[i];
}

/**
 * Equivalent to Xorshift128+ implementation across matrices of states.
 */
function xs128p_matrix(state0_matrix, state1_matrix) {
  state0_matrix = state0_matrix.slice();
  state1_matrix = state1_matrix.slice();
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
function rref(matrix, num_cols) {
  matrix = matrix.slice();
  const num_rows = matrix.length;
  let next_row = 0;
  for (let col = 0; col < num_cols; col++) {
    let column_bitmask = 1n << BigInt(num_cols - 1 - col);
    for (let row = next_row; row < num_rows; row++) {
      if (!(matrix[row] & column_bitmask)) {
        continue;
      }
      // Flip rows
      [matrix[row], matrix[next_row]] = [matrix[next_row], matrix[row]];
      for (let i = 0; i < num_rows; i++) {
        if (i === next_row) {
          continue;
        }
        // XOR all rows except next row
        if (matrix[i] & column_bitmask) {
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
  return matrix;
}

/**
 * Transposes a bit matrix.
 * Assumes the input matrix is 128 bits wide, so the output is 128 rows tall.
 */
function transpose(matrix) {
  const num_rows = BigInt(matrix.length);
  const flipped = [];
  for (let i = 0n; i < SOLUTION_WIDTH; i++) {
    let cell = 0n;
    for (let j = 0n; j < num_rows; j++) {
      let bit = (matrix[j] >> (SOLUTION_WIDTH - 1n - i)) & 1n;
      cell |= bit << (num_rows - 1n - j);
    }
    flipped.push(cell);
  }
  return flipped;
}


/**
 * Find kernel basis (homogeneous solutions)
 * https://en.wikipedia.org/wiki/Kernel_(linear_algebra)#Computation_by_Gaussian_elimination
 */
function get_kernel_basis(bits_from_states) {
  // bits_from_states is 128 cols wide and (# known bits) rows tall
  // transpose it to 128 rows tall, and (# known bits) cols wide
  let M = transpose(bits_from_states);

  // Augment our matrix from M to [M|I], where I is the 128x128 identity matrix
  M = M.map((row, i) => (row << SOLUTION_WIDTH) | IDENTITY128[i]);

  // RREF to effectively solve the system of equations
  M = rref(M, bits_from_states.length + Number(SOLUTION_WIDTH));

  const kernel_basis = [];
  for (let row of M) {
    if (row >> SOLUTION_WIDTH) {
      continue;
    }
    kernel_basis.push(row & SOLUTION_MASK);
  }

  const size = kernel_basis.length;
  if (size > 0) {
    console.warn(`WARNING: ${2**size} (2^${size}) potential solutions`);
  }

  return kernel_basis;
}

/**
 * Solve for the particular solution based on the bits
 * in the states and knowns. If this hits a contradiction
 * then there's no solveable solution within the knowns provided.
 */
function get_particular_solution(bits_from_states, bits_from_knowns) {
  // Augment our matrix to [S|K], where S = states and K = knowns
  M = bits_from_states.map((row, i) => (row << 1n) | bits_from_knowns[i]);

  // RREF to effectively solve the system of equations
  // Since S is 128 wide and K is 1 wide, the effective width of M is 129
  M = rref(M, Number(SOLUTION_WIDTH) + 1);

  // BigInt holding the 128 bits of the solution
  let solution = 0n;
  for (let i = 0; i < M.length; i++) {
    let row = M[i];
    if (row === 0n) {
      // Reached the rows of the RREF'd matrix which are 0, so stop
      break;
    }
    if (row === 1n) {
      // Contradiction found; no solution
      return null;
    }
    if (row & 1n) {
      solution |= IDENTITY128[IDENTITY128.length + 1 - bit_length(row)];
    }
  }

  return solution;
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
  let s1 = state0 & STATE_MASK;
  let s0 = state1 & STATE_MASK;
  s1 ^= (s1 << 23n) & STATE_MASK;
  s1 ^= (s1 >> 17n) & STATE_MASK;
  s1 ^= s0 & STATE_MASK;
  s1 ^= (s0 >> 26n) & STATE_MASK;
  state0 = state1 & STATE_MASK;
  state1 = s1 & STATE_MASK;
  return [state0, state1];
}

function xs128p_backward(state0, state1) {
  let prev_state1 = state0;
  let prev_state0 = state1 ^ (state0 >> 26n);
  prev_state0 = prev_state0 ^ state0;
  prev_state0 = reverse17(prev_state0);
  prev_state0 = reverse23(prev_state0);
  return [prev_state0, prev_state1];
}

function reverse17(val) {
  return val ^ (val >> 17n) ^ (val >> 34n) ^ (val >> 51n);
}

function reverse23(val) {
  return (val ^ (val << 23n) ^ (val << 46n)) & STATE_MASK;
}

function state_to_double(s0) {
  const dataView = new DataView((new Float64Array(1)).buffer);
  const mantissa = s0 >> 12n;
  dataView.setBigInt64(0, mantissa | 0x3FF0000000000000n);
  return dataView.getFloat64() - 1;
}

function state_to_double_node10(s0, s1) {
  const dataView = new DataView((new Float64Array(1)).buffer);
  const mantissa = (s0 + s1) & 0x000FFFFFFFFFFFFFn;
  dataView.setBigInt64(0, mantissa | 0x3FF0000000000000n);
  return dataView.getFloat64() - 1;
}

function get_mantissa(val) {
  if (val === 1.0) {
    return STATE_MASK >> 12n;
  }
  const dataView = new DataView((new Float64Array(1)).buffer);
  dataView.setFloat64(0, 1 + val);
  return dataView.getBigInt64() & 0x000FFFFFFFFFFFFFn;
}

function int_to_bits(n, length) {
  if (length === 0) {
    return [];
  }
  return n.toString(2).padStart(length, 0).split('').map(BigInt);
}

function bits_to_int(bits) {
  return parseInt(bits.join(''), 2);
}

function print_matrix(M, num_cols) {
  for (let row of M) {
    console.log(M.toString(2).padStart(num_cols, '0'));
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

function solve_in_rng_order(knowns) {
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

  // bits_from_knowns holds the individual bits we are confident in
  // from the knowns provided. It's effectively an 1xN bit matrix
  const bits_from_knowns = [];
  // bits_from_states holds the complementary bits from the state matrices
  // which we're iterating over as we step to each known. 128xN bit matrix
  const bits_from_states = [];

  for (let i = 0; i < knowns.length; i++) {
    let known = knowns[i];
    let [state0_matrix, _] = state_matrices(i);
    if (typeof(known) === 'number') {
      let mantissa = get_mantissa(known);
      // If the known is a float, then we capture and gain
      // all 52 bits of entropy from that float's mantissa
      let num_bits = 52;
      let mantissa_bits = int_to_bits(mantissa, num_bits);
      // Store all of the mantissa's bits from the knowns
      bits_from_knowns.push(...mantissa_bits);
      // Store all of the bit matrix rows from the states
      bits_from_states.push(...state0_matrix.slice(0, num_bits));
    } else if (Array.isArray(known)) {
      let [lo, hi] = known;
      let lo_mantissa = get_mantissa(lo);
      let hi_mantissa = get_mantissa(hi);
      // If the known is a float range, then we capture the high bits
      // which are stable between the mantissae of the range's bounds
      num_bits = 52 - bit_length(lo_mantissa ^ hi_mantissa);
      // Store those stable high bits from the mantissa of the knowns
      bits_from_knowns.push(
        ...int_to_bits(lo_mantissa >> BigInt(52 - num_bits), num_bits),
      );
      // Store the same number of bit matrix rows from the states
      bits_from_states.push(...state0_matrix.slice(0, num_bits));
    } else if (known === null) {
      // This is fine, just no bits of info are added
      continue;
    } else {
      throw new Error(`Unknown type '${typeof(known)}' for known ${known}`);
    }
  }

  // Find the particular solution, if one exists, of the states and knowns
  const particular_solution = get_particular_solution(
    bits_from_states,
    bits_from_knowns,
  );
  if (particular_solution === null) {
    // Contradiction found, no solutions
    return [];
  }

  // The kernel basis is a list of bit combos, derived from
  // the state0 matrices, which represent the permutable space
  // of possible homogeneous solutions. If we have enough known bits
  // of information, then the basis will have a small (or even 0)
  // length, and we won't need to check a bunch of permutations
  // beyond the particular solution we just found.
  const kernel_basis = get_kernel_basis(bits_from_states);

  if (kernel_basis.length > MAX_KERNEL_BASIS_SIZE) {
    console.error('too many to bruteforce, giving up :(');
    return [];
  }

  // Now to check and save good solutions which satisfy our knowns
  const solutions = [];

  for (let homogeneous_solutions of powerset(kernel_basis)) {
    // Start with the particular solution we found for our states and knowns
    let solution = particular_solution;
    // Then XOR that particular solution with a permutation of
    // possible homogeneous solutions found in the kernel basis step
    for (let vec of homogeneous_solutions) {
      solution ^= vec;
    }

    // Our solution is a 128-bit-wide integer.
    // The high and low 64 bits are s0 & s1, respectively
    let s0 = solution >> 64n;
    let s1 = solution & ((1n << 64n) - 1n);
    let candidate_solution = [s0, s1];

    // Now test this solution state (s0, s1) against our knowns,
    // iterating the state for each known and comparing the float
    // associated with that state against the known constraints
    let solution_is_good = true;
    for (let known of knowns) {
      let value = state_to_double(s0);
      if (typeof(known) === 'number') {
        if (known !== value) {
          // Floats don't match, try next candidate
          solution_is_good = false;
          break;
        }
      } else if (Array.isArray(known)) {
        let [low, high] = known;
        if (value <= low || high <= value) {
          // Float outside bounds, try next candidate
          solution_is_good = false;
          break;
        }
      }
      // Step the state forward to try the next known
      [s0, s1] = xs128p(s0, s1);
    }

    if (solution_is_good) {
      // We did not contradict any of the knowns,
      // so this is a good solution!
      solutions.push(candidate_solution);
    }
  }
  return solutions;
}


/**
 * Math.random() generates blocks of 64 values, and then reverses them:
 *
 *    block 1, roll 63
 *    block 1, roll 62
 *    block 1, roll 61
 *    ...
 *    block 1, roll  2
 *    block 1, roll  1
 *    block 1, roll  0
 *    block 2, roll 63   <- this value is generated 127 rolls *after*
 *    block 2, roll 62      the prior one which Math.random() outputted
 *    block 2, roll 61
 *
 * rolls: list of constraints for consecutive Math.random() float outputs
 * Each roll can be:
 *     float               [known value between 0.0 and 1.0]
 *     (float, float)      [known range of (low, high) values]
 *     or None             [no constraint for this output]
 *
 * Returns list of all possible RNG solutions or [] if no solution found
 */
function solve_in_math_random_order(rolls) {
  // Solver only works for Node 12 / Chrome
  const {block_size} = Rng.getPropertiesForMode('node12');
  let solutions = [];
  for (let offset = 0; offset < Math.min(rolls.length, block_size); offset++) {
    let knowns = [];
    let block = [];
    if (offset) {
      block = rolls.slice(0, offset).reverse();
      // If we have some initial offset, then the first block
      // needs to have the rest of the block filled out with nulls
      block.push(...Array(block_size - block.length).fill(null));
      knowns.push(...block);
    }
    for (let i = offset; i < rolls.length; i += block_size) {
      block = rolls.slice(i, i + block_size).reverse();
      // For every subsequent block, we need to fill the
      // start of the block with nulls instead of the end
      block.unshift(...Array(block_size - block.length).fill(null));
      knowns.push(...block);
    }
    let states = solve_in_rng_order(knowns);
    if (!states.length) {
      continue;
    }
    for (let state of states) {
      for (let i = 0; i < (offset || block_size) - 1; i++) {
        state = xs128p(...state);
      }
      solutions.push({
        state: state,
        offset: (offset || block_size) - 1,
        roll: state_to_double(state[0]),
        crossesBlockBoundary: knowns.length > block_size,
      });
    }
  }
  return solutions;
}

function murmurhash3(h) {
  h ^= h >> 33n;
  h = (h * 0xFF51AFD7ED558CCDn) & STATE_MASK;
  h ^= h >> 33n;
  h = (h * 0xC4CEB9FE1A85EC53n) & STATE_MASK;
  h ^= h >> 33n;
  return h;
}

function murmurhash3_inv(h) {
  h ^= h >> 33n;
  h = (h * 0X9CB4B2F8129337DBn) & STATE_MASK;
  h ^= h >> 33n;
  h = (h * 0X4F74430C22A54005n) & STATE_MASK;
  h ^= h >> 33n;
  return h;
}

class Rng {
  constructor(state, offset, rng_mode = null) {
    this.state = state;
    this.offset = offset;
    const {mode, block_size, to_double} = Rng.getPropertiesForMode(rng_mode);
    this.mode = mode;
    this.block_size = block_size;
    this.to_double = to_double;
  }

  static fromStateStr(str) {
    const coordRegex = /^\((?<s0>\d+),\s*(?<s1>\d+)\)(?:[ +]+(?<offset>\d+))?$/;
    const {groups: state} = coordRegex.exec(str);
    if (!state) {
      return null;
    }
    return new Rng(
      [BigInt(state.s0), BigInt(state.s1)],
      parseInt(state.offset),
    );
  }

  static getPropertiesForMode(mode) {
    switch (mode) {
      case 'node10':
        return {
          mode: 'node10',
          block_size: 62,
          to_double: ([s0, s1]) => state_to_double_node10(s0, s1),
        };
      case 'node12':
      default:
        return {
          mode: 'node12',
          block_size: 64,
          to_double: ([s0, _]) => state_to_double(s0),
        };
    }
  }

  getStateStr() {
    return `(${this.state[0]},${this.state[1]})+${this.offset}`;
  }

  getStateURL() {
    const modeParam = this.#isNode10() ? `&mode=${this.mode}` : '';
    return `https://rng.sibr.dev/?state=${this.getStateStr()}` + modeParam;
  }

  static fromSeed(seedHex, offset) {
    const seed = BigInt('0x'+seedHex);
    let state0 = murmurhash3(seed) & STATE_MASK;
    let state1 = murmurhash3(~seed) & STATE_MASK;
    const rng = new Rng([state0, state1], 63);
    rng.step(offset || 0);
    return rng;
  }

  getSeed() {
    let [state0, state1] = [this.s0, this.s1];
    for (let distance = 0; distance < 1E7; distance++) {
      let seed0 = murmurhash3_inv(state0) & STATE_MASK;
      let seed1 = ~murmurhash3_inv(state1) & STATE_MASK;
      if (seed0 === seed1) {
        return {
          seed: seed0.toString(16),
          stepsBack: distance,
          expectedOffset: (distance + 63) % 64,
        };
      }
      [state0, state1] = xs128p_backward(state0, state1);
    }
    return null;
  }

  value() {
    return this.to_double(this.state);
  }

  next() {
    return this.step(1);
  }

  prev() {
    return this.step(-1);
  }

  step(steps) {
    this.offset -= steps;

    while (this.offset < 0) {
      this.#stepRaw((this.block_size * 2));
      this.offset += this.block_size;
    }

    while (this.offset >= this.block_size) {
      this.#stepRaw(-(this.block_size * 2));
      this.offset -= this.block_size;
    }

    this.#stepRaw(-steps);
    return this.value();
  }

  #stepRaw(amount) {
    const stepper = amount > 0 ? xs128p : xs128p_backward;
    for (let i = 0; i < Math.abs(amount); i++) {
      this.state = stepper(...this.state);
    }
  }

  #isNode10() {
    return this.mode === 'node10';
  }
}
