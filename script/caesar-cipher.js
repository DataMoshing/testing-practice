function caeserCipher(str, shift) {
    // Store result
    let resultArr = [];
    // Iterate through each character in input string
    for (let i = 0; i < str.length; i++) {
        // Get unicode value of character at index i, add shift value or positions character will be shifter in cipher
        let code = str.charCodeAt(i) + shift;
        // Loop while code is greater than 122 or "z"
        while (code > 122) {
            // Subtract 122 from current value (122 represents number of positions the code has gone beyond "z") and + 96 brings it to beginning of lowercase alphabet
            code = (code - 122) + 96
        }
        // Convert unicode value to corresponding character then push to resultArr array
        resultArr.push(String.fromCharCode(code))
    }
    // Join characters together returning ciphered string
    return resultArr.join("")
}

// If code is 130, it means the original character was "z", and it has been shifted eight positions beyond "z". Subtracting 122 gives 9 then adding 96 brings the unicode value back to "a" or 97

caeserCipher("abcdefghi", 1)