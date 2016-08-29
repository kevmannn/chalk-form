import chalk from 'chalk';

export default methods => str => methods.reduce((p, c) => chalk[c](p), str);
