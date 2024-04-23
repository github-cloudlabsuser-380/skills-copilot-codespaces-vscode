const readline = require('readline');

const calculator = {
    currentValue: 0,

    add: function(number) {
        this.currentValue += number;
    },

    subtract: function(number) {
        this.currentValue -= number;
    },

    multiply: function(number) {
        this.currentValue *= number;
    },

    divide: function(number) {
        if (number !== 0) {
            this.currentValue /= number;
        } else {
            throw new Error('Error: Division by zero is not allowed.');
        }
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
    rl.question('Enter first number: ', (firstNumber) => {
        rl.question('Enter second number: ', (secondNumber) => {
            firstNumber = parseFloat(firstNumber);
            secondNumber = parseFloat(secondNumber);

            switch (operation) {
                case 'add':
                    calculator.add(firstNumber);
                    calculator.add(secondNumber);
                    break;
                case 'subtract':
                    calculator.add(firstNumber);
                    calculator.subtract(secondNumber);
                    break;
                case 'multiply':
                    calculator.currentValue = 1; // Reset to 1 for multiplication
                    calculator.multiply(firstNumber);
                    calculator.multiply(secondNumber);
                    break;
                case 'divide':
                    calculator.currentValue = firstNumber;
                    calculator.divide(secondNumber);
                    break;
                default:
                    console.log('Invalid operation!');
                    rl.close();
                    return;
            }

            console.log('Result: ' + calculator.currentValue);
            calculator.currentValue = 0; // Reset for next calculation
            rl.close();
        });
    });
});