import {
    detectOperation,
    extractDelimiter, 
    splitNumbers, 
    validateNoNegatives, 
} from './stringCalculator.helper';

export class StringCalculator {
    calculate(input: string): number {
        if (!input) {
            return 0;
        }

        const { rawDelimiter, delimiter, numbersSection } = extractDelimiter(input);
        const operation = detectOperation(rawDelimiter); // this is to identify the delemiter!
        const numList = splitNumbers(numbersSection, delimiter);

        validateNoNegatives(numList);

        return this.applyOperation(numList);
    }

    private applyOperation(numbers: number[]): number {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}