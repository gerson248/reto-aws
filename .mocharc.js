module.exports = {
  require: 'ts-node/register/transpile-only',
  extension: ['ts'],
  watchExtensions: ['ts'],
  timeout: 5 * 60 * 1000,
  spec: ['tests/film.test.ts'],
}