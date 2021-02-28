const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let seasons = {
        winter: [0, 1, 11],
        spring: [2, 3, 4],
        summer: [5, 6, 7],
        autumn: [8, 9, 10],
    };
    if (Object.prototype.toString.call(date) === "[object Date]") {
        for (const [key, value] of Object.entries(seasons)) {
            if (value.includes(date.getMonth())) {
                return key;
            }
        }
    } else if (typeof date == 'object') {
        throw 'exc';
    } else {
        return 'Unable to determine the time of year!';
    }

};