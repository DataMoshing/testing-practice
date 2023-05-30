const calculator = require("../script/calculator.js")

describe("calulator sum", () => {
    test("calculate sum of two numbers", () => {
        expect(calculator.add(1, 2)).toBe(3);
    })
});

describe("calculator difference", () => {
    test("calculate difference of two numbers", () => {
        expect(calculator.subtract(2, 1)).toBe(1)
    })
})

describe("calculator division", () => {
    test("calculate quotient of two numbers", () => {
        expect(calculator.divide(2, 2)).toBe(1)
    })
})

describe("calculator multiplication", () => {
    test("calculate product of two numbers", () => {
        expect(calculator.multiply(6, 2)).toBe(12)
    })
})
