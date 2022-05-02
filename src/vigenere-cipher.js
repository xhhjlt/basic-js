const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isReverse = !isDirect;
  }

  encrypt(message, key) {
    if ((key === undefined) || (message === undefined))
      throw {
        name: "IncorrectArgumentsError",
        message: "Incorrect arguments!",
      }
    let messageArr = message.toUpperCase().split("");
    if (this.isReverse) messageArr.reverse();
    for (let i = 0, j = 0; i < messageArr.length; i++) {
      if ((messageArr[i].charCodeAt(0) >= 65) && (messageArr[i].charCodeAt(0) <= 90)) {
        messageArr[i] = String.fromCharCode((messageArr[i].charCodeAt(0) + key.toUpperCase().charCodeAt(j)) % 26 + 65)
        j++;
      }
      if (j === key.length) j = 0;
    }
    return messageArr.join('');
  }
  decrypt(encryptedMessage, key) {
    if ((key === undefined) || (encryptedMessage === undefined))
      throw {
        name: "IncorrectArgumentsError",
        message: "Incorrect arguments!",
      }
    let messageArr = encryptedMessage.toUpperCase().split("");
    if (this.isReverse) messageArr.reverse();
    for (let i = 0, j = 0; i < messageArr.length; i++) {
      if ((messageArr[i].charCodeAt(0) >= 65) && (messageArr[i].charCodeAt(0) <= 90)) {
        messageArr[i] = String.fromCharCode((messageArr[i].charCodeAt(0) - key.toUpperCase().charCodeAt(j) + 26) % 26 + 65)
        j++;
      }
      if (j === key.length) j = 0;
    }
    return messageArr.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};