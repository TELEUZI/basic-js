const CustomError = require("../extensions/custom-error");


module.exports = function countCats(backyard) {
    return backyard
        .reduce((numberOfBackyardCats, catArray) =>
            numberOfBackyardCats + numberOfCatsinArray(catArray), 0);
};

const numberOfCatsinArray = (catArray) => catArray.filter(currentSign => isCat(currentSign)).length;
const isCat = (sign) => sign === '^^';