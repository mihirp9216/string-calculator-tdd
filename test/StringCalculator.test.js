"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const StringCalculator_1 = require("../src/helpers/StringCalculator");
describe('StringCalculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new StringCalculator_1.StringCalculator();
    });
    it('should return 0 for an empty string', () => {
        console.log('calculator', calculator);
        (0, chai_1.expect)(calculator.calculate('')).to.equal(1); // wrong test case
    });
    it('should return the number for a single number input', () => {
        (0, chai_1.expect)(calculator.calculate('1')).to.equal(0); //wrong test case
    });
});
