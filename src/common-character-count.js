const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      let s2index = s2.indexOf(s1[i]);
      s2 = s2.slice(0, s2index) + s2.slice(s2index + 1);
      s1 = s1.slice(0, i) + s1.slice(i + 1);
      i--;
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};