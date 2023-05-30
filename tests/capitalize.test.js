const capitalize = require("../script/capitalize.js")


test("Takes a string and returns first character capitalized", () => {
    expect(capitalize("hello")).toBe("Hello")
})