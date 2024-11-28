import { Operation } from '../enums/operation.enum';
import {
    detectOperation,
    extractDelimiter, 
    splitNumbers, 
    validateNoNegatives, 
} from './stringCalculator.helper';

export class StringCalculator {
    calculate(input: string): number {
        console.log('input', input);
        if (!input) {
            return 0;
        }

        const { rawDelimiter, delimiter, numbersSection } = extractDelimiter(input);
        const operation = detectOperation(rawDelimiter);  // Detect operation using the raw delimiter
        const numList = splitNumbers(numbersSection, delimiter);

        validateNoNegatives(numList);

        return this.applyOperation(numList, operation);
    }

    private applyOperation(numbers: number[], operation: Operation): number {
        switch (operation) {
            case Operation.Addition:
            default:
                return numbers.reduce((sum, num) => sum + num, 0);
        }
        // console.log('numbers', numbers);
        // console.log('operation', operation);
        // return numbers.reduce((sum, num) => sum + num, 0);
    }
}