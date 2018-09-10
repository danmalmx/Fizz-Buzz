const { FizzBuzz } = require('./spec.helper')

describe('Fizz Buzz', () => {
    let fizzBuzz = new FizzBuzz

    it ('returns Fizz if number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    });

    it ('return Buzz if number is divisible by 5', () => {
        expect(fizzBuzz.check(5)).to.eql('Buzz')
    });

    it ('returns FizzBuzz if number is divisible by 15', () => {
        expect(fizzBuzz.check(15)).to.eql('FizzBuzz')
    });

    it ('returns a number if no game rules are met', () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    });

    it ('returns "Positive integers only" if input is a 0 or a negative number', () => {
        expect(fizzBuzz.check(0)).to.eql('Positive integers only')
    });

    it ('returns "That is not a number!" if a NaN is used', () => {
        expect(fizzBuzz.check("dasdkj")).to.eql('That is not a number!')
    });

});