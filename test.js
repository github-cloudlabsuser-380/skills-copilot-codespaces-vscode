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

// Usage:
calculator.add(5); // Adds 5 to the current value
console.log(calculator.currentValue); // Outputs: 5

calculator.subtract(3); // Subtracts 3 from the current value
console.log(calculator.currentValue); // Outputs: 2

calculator.multiply(4); // Multiplies the current value by 4
console.log(calculator.currentValue); // Outputs: 8

calculator.divide(2); // Divides the current value by 2
console.log(calculator.currentValue); // Outputs: 4