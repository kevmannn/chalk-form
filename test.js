import hasAnsi from 'has-ansi';
import ansiRegex from 'ansi-regex';
import test from 'ava';
import fn from './';

const ec = '\u001b[32m';
const str = fn(['bold', 'italic', 'green'])('this is bold, italic, and green.');

test('fn prints str with correct ansi code', t => {
  t.true(str.match(ansiRegex()).indexOf(ec) !== -1);
  t.true(hasAnsi(str));
})
