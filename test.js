// Define the calculator object
const calculator = {
    // Define the current value of the calculator
    currentValue: 0,

    // Add a number to the current value
    add: function(num) {
        this.currentValue += num;
    },

    // Subtract a number from the current value
    subtract: function(num) {
        this.currentValue -= num;
    },

    // Multiply the current value by a number
    multiply: function(num) {
        this.currentValue *= num;
    },

    // Divide the current value by a number
    divide: function(num) {
        this.currentValue /= num;
    }
};

// Test the calculator
calculator.add(5);
console.log(calculator.currentValue); // 5
calculator.subtract(2);
console.log(calculator.currentValue); // 3
calculator.multiply(3);
console.log(calculator.currentValue); // 9
calculator.divide(2);
console.log(calculator.currentValue); // 4.5
calculator.clear();
console.log(calculator.currentValue); // 0
