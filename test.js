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

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)));
}

async function main() {
    while (true) {
        console.log(`Current value: ${calculator.currentValue}`);
        let operation = await askQuestion('Enter operation (add, subtract, multiply, divide, exit): ');
        if (operation === 'exit') break;
        let number = parseFloat(await askQuestion('Enter number: '));
        calculator[operation](number);
    }
    rl.close();
}

main();