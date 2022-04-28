const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const ln2 = 0.693;
  if (typeof(sampleActivity) !== "string") return false;
  if (sampleActivity.length === 0 ) return false;
  sampleActivity = parseFloat(sampleActivity);
  if (Number.isNaN(sampleActivity)) return false;
  if (sampleActivity < 1 || sampleActivity > 15) return false;
  result = Math.log(MODERN_ACTIVITY / sampleActivity)/(ln2 / HALF_LIFE_PERIOD);
  return Math.ceil(result);
}

module.exports = {
  dateSample
};
