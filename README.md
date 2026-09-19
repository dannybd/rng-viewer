# rng-viewer
Nominative Determinism: Peer into Blaseball's past...and derive the stars.

## Development

From the root directory, run:
`python3 -m http.server 8000`

And then load this site from http://localhost:8000/ .

(Loading the index.html file directly in your browser will cause CORS errors.)

To upload new fragments:
```sh
rsync -avcPz --ignore-existing fragments/* sibr:/srv/www/files.sibr.dev/rng/fragments/
```
