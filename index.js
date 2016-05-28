'use strict';
const chalk = require('chalk');

module.exports = methods => str => methods.reduce((p, c) => chalk[c](p), str);
