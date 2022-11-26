import cloneDeep from 'lodash.clonedeep';
import forEach from 'lodash.foreach';
import merge from 'lodash.merge';
import replace from 'lodash.replace';

export const isUndefined = (value) => {
  return undefined === value;
};

export const toMilliseconds = (seconds) => {
  return (seconds * 1000);
};

export const replacer = (input = '', replacements) => {
  let output = input;
  if(input) {
    Object.entries(replacements).forEach(([key, value]) => {
      output = output.replace(new RegExp('\\{' + key + '\\}', 'g'), value);
    });
  }

  return output;
};

export const getSafe = (fn, alt = undefined) => {
  try {
    let val = fn();
    if (isUndefined(val) || null === val) {
      val = alt;
    }
    return val;
  } catch (e) {
    return alt;
  }
};

export const arrayToMap = (array, key) => {
  /**
   * @function arrayToMap
   * @arg {array} array
   * @arg {string} key
   * @return {object} map of array, based on key
   * @example [{id: 1, name: Fred}, {id: 2, name: Jason}] --> {1: {id: 1, name: Fred}, 2: {id: 2, name: Jason}}
   */
  let out = {};
  for (const element of array) {
    out[element[key]] = element;
  }

  return out;
};

export {
  cloneDeep,
  forEach,
  merge,
  replace
}