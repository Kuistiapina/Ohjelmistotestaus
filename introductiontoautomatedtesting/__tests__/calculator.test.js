import {divide} from '../src/calculator.js';

describe('divide', () => {

    // One positive test case, we expect the function to return a value

    it('divides two positive numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });

    // The rest must be negative test cases, we expect the function to throw an error

    // Suoraan nollalla jako

    it('throws when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow('Division by zero is not allowed');
    });

    // Asetetaan jakajaksi niin pieni luku, että se on käytännössä nolla

    it('throws when dividing by zero', () => {
        expect(() => divide(6, 1e-324)).toThrow('Division by zero is not allowed');
    });

    // Toinen luvuista string-muuttuja

    it('throws when inputs are not numbers', () => {
        expect(() => divide('2', 3)).toThrow('Both arguments must be numbers');
    });

    // Jakajana boolean-arvo

    it('throws when inputs are not numbers', () => {
        expect(() => divide(6, false)).toThrow('Both arguments must be numbers');
    });

    // Toinen luvuista NaN eli 'Not a Number'

    it('throws when inputs are NaN', () => {
        expect(() => divide(NaN, 3)).toThrow('Arguments cannot be NaN');
    });
    




});
