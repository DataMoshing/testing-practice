const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}

console.log(`Addition: ${calculator.add(5, 2)}`)
console.log(`Subtraction: ${calculator.subtract(4, 2)}`)
console.log(`Division: ${calculator.divide(2, 2)}`)
console.log(`Multiplication: ${calculator.multiply(2, 6)}`)


module.exports = calculator;