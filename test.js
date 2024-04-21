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
