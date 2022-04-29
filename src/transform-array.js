const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw {
      name: "NotArrayError",
      message: ("'arr' parameter must be an instance of the Array!")
    }
  }
  let arr1 = arr.slice();
  result = [];
  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === "--discard-next") {
      i++;
      if (arr1[i + 1] === "--double-prev" || arr1[i + 1] === "--discard-prev") i++;
      continue;
    }
    if (arr1[i] === "--discard-prev") {
      if (result[j - 1]) j--;
      continue;
    }
    if (arr1[i] === "--double-next") {
      if (arr1[i + 1]) {
        result[j] = arr1[i + 1];
        j++;
      };
      continue;
    }
    if (arr1[i] === "--double-prev") {
      if ((result[j - 1]) && (arr[i - 1])) {
        result[j] = arr[i - 1];
        j++
      }
      continue;
    }
    result[j] = arr1[i];
    j++;
  }
  return result;
}

module.exports = {
  transform
};