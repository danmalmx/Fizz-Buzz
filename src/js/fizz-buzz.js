function FizzBuzz() {
    this.check = (number) => {

        if (number <= 0) {
            return 'Positive int only';   
        } else if (number % 15 === 0) {
            return 'FizzBuzz';
        } else if (number % 5 === 0) {
            return 'Buzz';
        } else if (number % 3 === 0) {
            return 'Fizz';
        } else if ((isNaN(number))) {
            return 'That is not a number!'
        } else {
            return number;
        }
    }
} 