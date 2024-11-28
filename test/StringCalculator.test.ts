import { expect } from 'chai';
import { StringCalculator } from '../src/helpers/StringCalculator';
import { beforeEach, describe, it } from 'node:test';

describe('StringCalculator', () => {
    let calculator: StringCalculator

    beforeEach(() => {
        calculator = new StringCalculator();
    })

    it('should return 0 for an empty string', () => {
        expect(calculator.calculate('')).to.equal(0);
    })

    it('should return the number for a single number input', () => {
        expect(calculator.calculate('1')).to.equal(1);
    });

    it('should return the sum of two numbers', () => {
        expect(calculator.calculate('1,2')).to.equal(3);
    });

    it('should return the sum of multiple numbers', () => {
        expect(calculator.calculate('1,2,3,4,5')).to.equal(15);
    });

    it('should handle numbers with whitespace', () => {
        expect(calculator.calculate(' 1 , 2 , 3 ')).to.equal(6);
    });

    it('should ignore empty values caused by extra commas', () => {
        expect(calculator.calculate('1,,2,3')).to.equal(6);
    });

    it('should handle new lines as delimiters', () => {
        expect(calculator.calculate('1\n2,3')).to.equal(6);
    });

    it('should throw an error when a negative number is provided', () => {
        expect(() => calculator.calculate('1,-2,3')).to.throw('Negative numbers are not allowed');
    });

    it('should throw an error when multiple negatives are provided', () => {
        expect(() => calculator.calculate('1,-2,-3,4')).to.throw('Negative numbers are not allowed');
    });
})