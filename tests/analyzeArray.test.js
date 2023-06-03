const analyzeArray = require("../script/analyzeArray.js")

test("Analyze properties of object", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
});