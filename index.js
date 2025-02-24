"use strict";

class _squareRoot {
    constructor(num) {
        this.number = num;
        this.result = Math.sqrt(num);
    }
    toString() {
        return `√${this.number}`;
    }
    valueOf() {
        return this.result;
    }
}

const sqrt = (inputNum) => new _squareRoot(inputNum);

export default sqrt;
