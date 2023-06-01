const caeserCipher = require("../script/caesar-cipher.js")

test("wrapping from z to a", () => {
    expect(caeserCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza")
});

test("Works with different cases", () => {
    expect(caeserCipher("abcdefghi", 6)).toBe("ghijklmno")
});
