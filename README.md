# chalk-form

> apply an array of [`chalk`](https://github.com/chalk/chalk) methods to a string

[![Build Status](https://travis-ci.org/kevmannn/chalk-form.svg?branch=master)](https://travis-ci.org/kevmannn/chalk-form)

## Install

```console
npm install --save chalk-form
```

## Usage

`chalkForm` returns a function which takes the desired string as an argument:

```js
import chalkForm from 'chalk-form';

const style = ['bold', 'italic', 'green'];
const str = chalkForm(style)('this is bold, italic, and green.');
```

## License

MIT © [Kevin Donahue](https://twitter.com/nonnontrivial)
