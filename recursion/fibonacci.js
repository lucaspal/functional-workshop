'use strict';

const imperativeFibonacci = (n) => {
  let fibonacciSequence = [];
  let a = 1;
  let b = 1;

  for (let i = 0; i < n; i++) {
    if (a > b) {
      b += a;
      fibonacciSequence.push(b);
    } else {
      a += b;
      fibonacciSequence.push(a);
    }
  }

  return fibonacciSequence;
};

const recursiveFibonacci = (n) => {
  // TODO
};


const tailRecursiveFibonacci = (n) => {
  // TODO
}
