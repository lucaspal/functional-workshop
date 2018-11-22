'use strict';

// NOTE: The functions in this module are for educational purposes, not high-performance production use!
const { count, head, tail } = require('../arrayHelpers.js');

const filter = (predicateFn, array) => {
  if (array !== undefined && array.length > 0) {
    const h = head(array);
    const t = tail(array);

    const okElements = predicateFn(h) ? [h] : [];

    return okElements.concat(filter(predicateFn, t));
  } else {
    return [];
  }
}

const map = (mappingFn, array) => {
  if (count(array) === 0) {
    return [];
  }

  const h = head(array);
  const t = tail(array);
  return [mappingFn(h)].concat(map(mappingFn, t))
};

const reduce = (reducerFn, initialValue, array) => {
  // NOTE: many reduce implementations treat the initialValue argument as optional - here we'll require it, for simplicity
  if (count(array) === 0) return initialValue;
  return reduce(reducerFn, reducerFn(initialValue, head(array)), tail(array));
};


module.exports = { filter, map, reduce };
