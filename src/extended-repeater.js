const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes && options.addition) options.additionRepeatTimes = 1;
  if (!Number.isInteger(options.additionRepeatTimes)) options.additionRepeatTimes = 0;
  let additionsArr = new Array(options.additionRepeatTimes);
  additionsArr.fill('' + options.addition);
  let strAndAdditions = '' + str + additionsArr.join(options.additionSeparator);
  let resultArr = new Array(options.repeatTimes);
  resultArr.fill(strAndAdditions);
  return resultArr.join(options.separator);

}

module.exports = {
  repeater
};