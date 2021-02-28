const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(modeType) {
        this.mode = modeType != undefined ? modeType : true;
    }
    encrypt(str, key) {
        if (str || key !== undefined) {
            let n = 0;
            let k = [];
            str = this.mode ? str : str.split('').reverse().join('');
            str = str.split('').map((el, index) => {
                if ((el.codePointAt() > 64 && el.codePointAt() < 91) || (el.codePointAt() > 96 && el.codePointAt() < 123)) {
                    k.push(String.fromCharCode((((el.toLowerCase().charCodeAt() + key.toLowerCase().codePointAt(Math.abs(index - n) % key.length)) - 64) % 26) + 65))
                } else {
                    k.push(el);
                    n++;
                }
                return k.join('');
            })[str.split('').length - 1]
            return str;
        } else {
            throw '1';
        }
        // remove line with error and write your code here
    }
    decrypt(str, key) {
        if (str || key !== undefined) {
            let n = 0;
            let k = [];
            str = this.mode ? str : str.split('').reverse().join('');
            str = str.split('').map((el, index) => {
                if ((el.codePointAt() > 64 && el.codePointAt() < 91)) {
                    k.push(String.fromCodePoint(Math.abs(el.toLowerCase().codePointAt() - key.toLowerCase().codePointAt(Math.abs(index - n) % key.length) + 26) % 26 + 65))
                } else {
                    k.push(el);
                    n++;
                }
                return k.join('');
            })[str.split('').length - 1].toUpperCase();
            return str;
        } else {
            throw '1';
        }
    }
}
module.exports = VigenereCipheringMachine;























// Условные вероятности
// Формула полной вероятности
// Условная вероятность - это вероятность события А при условии, что произошло событие В.
// Обозн.Р(А / В)
// ABC ABCA