const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arrs: [],


    getLength() {
        return this.arrs.length;
    },
    addLink(value) {
        this.arrs.push(`${value}`);
        return this;
    },
    removeLink(position) {
        if (position < this.arrs.length && position >= 0) {
            this.arrs.splice(position - 1, 1);
            return this;
        } else {
            this.arrs = [];
            throw 'exc';
        }

    },
    reverseChain() {
        this.arrs.reverse();
        return this;
        // remove line with error and write your code here
    },
    finishChain() {
        let z = this.arrs.map(el => `( ${el} )`).join('~~');
        this.arrs = [];

        return z;
        // remove line with error and write your here code
    }
};

module.exports = chainMaker;