import hasAnsi from 'has-ansi';
import test from 'ava';
import fn from './';

// const ec = '\e[1;32m';

test('fn prints str with correct ansi code', t => {
  const str = fn(['bold', 'italic', 'green'])('this is bold, italic, and green.');
  t.true(hasAnsi(str));
})
