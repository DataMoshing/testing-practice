const reverseString = require("../script/reverseString.js")

test("Takes a string and returns reversed string", () => {
    expect(reverseString("hello")).toBe("olleh")
})