const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
    return {
        turns: calcTurns(diskNumber),
        seconds: Math.floor(calcTurns(diskNumber) / turnsSpeedInSeconds(turnsSpeed))
    };
};
const calcTurns = diskNumber => 2 ** diskNumber - 1;
const turnsSpeedInSeconds = turnsSpeed => turnsSpeed / 3600;