'use strict';

const { count, head, tail } = require('../arrayHelpers.js');
const { reduce } = require('../higher-order/filterMapReduce.js');

const pipeline = (...functions) => {
  if (count(functions) === 0) return (input) => input;
  if (count(functions) === 1) return (input) => functions[0](input);

  const recursion = (headFunction, tailFunctions) => {
    return recursion((head(tailFunctions)(newInput)), tail(tailFunctions));
  }

  return (input) =>  pipeline(...tail(functions))(head(functions)(input));
};

const reducePipeline = (...functions) => {
  // reduce takes: 
  // 1) reducer function,
  // 2) initial value
  // 3) array (of functions in this case)
  return (input) => reduce((acc, fn) => fn(acc), input, functions);
};


module.exports = pipeline;
