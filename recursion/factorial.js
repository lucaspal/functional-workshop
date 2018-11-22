'use strict';
// Factorial: example 5! = 1*2*3*4*5

const imperativeFactorial = (n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * i;
  }
  return result;
};

const recursiveFactorial = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n * recursiveFactorial(n - 1);
  }
};

const tailRecursiveFactorial = (n) => {
    const tailFactorial = (n, sum) => {
      if (n === 0) {
        return sum;
      } else {
        return tailFactorial(n - 1, sum * n);
      }
    }

    return tailFactorial(n, 1);
};
