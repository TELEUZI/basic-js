const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    return new Array(options.repeatTimes)
        .fill(
            String(str).concat(new Array(options.additionRepeatTimes)
                .fill(options.addition !== undefined ? String(options.addition) : '')
                .join(options.additionSeparator || '|'))
        ).join(options.separator || '+');
};