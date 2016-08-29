import hasAnsi from 'has-ansi';
import ansiRegex from 'ansi-regex';
import test from 'ava';
import fn from './';

const ec = '\u001b[32m';
const str = fn(['bold', 'italic', 'green'])('x');

test('`fn` prints given string with correct ansi code', t => {
  t.true(str.match(ansiRegex()).indexOf(ec) !== -1);
  t.true(hasAnsi(str));
})
