# chalk-form

> apply an array of chalk methods to a string

[![Build Status](https://travis-ci.org/kevmannn/chalk-form.svg?branch=master)](https://travis-ci.org/kevmannn/chalk-form)

## Install

```console
npm install --save chalk-form
```

## Usage

`chalkForm` returns a function which takes a string as an argument:

```js
const str = chalkForm(['bold', 'italic', 'green'])('this is bold, italic, and green.');
```

## License

MIT © [Kevin Donahue](https://twitter.com/nonnontrivial)
