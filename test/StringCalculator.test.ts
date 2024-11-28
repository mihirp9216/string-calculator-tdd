import { expect } from 'chai';
import { StringCalculator } from '../src/helpers/StringCalculator';
import { beforeEach, describe, it } from 'node:test';

describe('StringCalculator', () => {
    let calculator: StringCalculator

    beforeEach(() => {
        calculator = new StringCalculator();
    })

    it('should return 0 for an empty string', () => {
        console.log('calculator',calculator);
        expect(calculator.calculate('')).to.equal(1); // wrong test case
    });

    it('should return the number for a single number input', () => {
        expect(calculator.calculate('1')).to.equal(0); //wrong test case
    });
});