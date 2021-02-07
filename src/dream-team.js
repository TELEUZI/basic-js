const CustomError = require("../extensions/custom-error");



const sortAlhabetically = str => str.split('').sort().join('');

const collectFirstLetters = (accum, currentName) => typeof currentName == 'string' ? accum + getFirstLetter(currentName) : accum;

const getFirstLetter = str => str.trim()[0];

const createDreamTeam = (members) => Array.isArray(members) ? sortAlhabetically(members.reduce(collectFirstLetters, '').toUpperCase()) : false;
module.exports = createDreamTeam;