const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let indexStart = domains[i].length;
    let indexEnd = domains[i].length;
    let dnsStr = "";
    while (domains[i].lastIndexOf(".", indexStart) != -1) {
      dnsStr += domains[i].slice(domains[i].lastIndexOf(".", indexStart), indexEnd);
      if (result[dnsStr] === undefined) {
        result[dnsStr] = 1;
      } else {
        result[dnsStr] += 1;
      }
      indexEnd = domains[i].lastIndexOf(".", indexEnd - 1);
      indexStart = indexEnd - 1;
    }
    dnsStr += "." + domains[i].slice(0, indexEnd);
    if (result[dnsStr] === undefined) {
      result[dnsStr] = 1;
    } else {
      result[dnsStr] += 1;
    }
  }
  return result;
}


module.exports = {
  getDNSStats
};