function multiplyArgs(...args: number[]) {
  return args.reduce((ac, value) => ac * value, 1);
}

function concatenateArgs(...args: string[]) {
  return args.join('').toUpperCase();
}

const resultMultiply = multiplyArgs(1, 2, 3);
console.log(resultMultiply);

const resultConcatenate = concatenateArgs('a', 'b', 'c');
console.log(resultConcatenate);

export default null;
