const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = new Array(names.length);
  for (let i = 0; i < names.length; i++) {

    let temp = names[i];
    let k = 0;
    while (names.indexOf(temp) !== -1) {
      if (k === 0) {
        newNames[i] = temp;
        names[i] = '';
      } else {
        newNames[names.indexOf(temp)] = temp + `(${k})`;
        names[names.indexOf(temp)] = temp + `(${k})`;
      }
      k++;
    }
  }
  return newNames;
}

module.exports = {
  renameFiles
};