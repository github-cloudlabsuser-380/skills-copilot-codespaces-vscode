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
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(2);
calculator.clear();
