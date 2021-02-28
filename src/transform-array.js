const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
    let Narray = array.slice(0);
    for (let index = 0; index < Narray.length; index++) {
        if (Narray[index] != undefined) {
            if (Narray[index] == '--discard-next') {
                Narray[index] = undefined;
                Narray[index + 1] = undefined;

            } else if (Narray[index] == '--discard-prev') {
                Narray[index] = undefined;
                Narray[index - 1] = undefined;
            } else if (Narray[index] == '--double-next') {
                Narray[index] = Narray[index + 1];
            } else if (Narray[index] == '--double-prev') {
                Narray[index] = Narray[index - 1]
            }
        }
    }
    return Narray.filter(el => el != undefined);
};