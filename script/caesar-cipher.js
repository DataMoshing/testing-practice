function caeserCipher(str, shift) {
    let resultArr = [];

    for (let i = 0; i < str.length; i++) {
        // Assign the character at index i of the input string str to the variable char
        let char = str[i];

        // Check if the character is a letter using regex
        if (/[a-zA-Z]/.test(char)) {
            // Retrieve unicode of the character at given index and store to code variable
            let code = str.charCodeAt(i);

            // Subtract 97 from original unicode variable code, 97 is to get the code to a range of 0-25 (0 = a, 1 = b) essentially mapping 0-25 to a-z then apply the shift value to determine number of positions character will be shifted then use modulo 26 to make sure code remains in range 0-25 since there are 26 letters in alphabet wrapping it around if code exceeds 25 finally add 97 after applying shift and modulo adjusting code back to the range of ASCII lowercase letters (0 = a, 1 = b)
            code = (code - 97 + shift) % 26 + 97;

            // Convert the shifted Unicode code back to a character and add it to the result array
            resultArr.push(String.fromCharCode(code));
        } else {
            // For non letter characters such as punctuation keep them unchanged
            resultArr.push(char);
        }
    }

    return resultArr.join("");
}

// If code is 130, it means the original character was "z", and it has been shifted eight positions beyond "z". Subtracting 122 gives 9 then adding 96 brings the unicode value back to "a" or 97


console.log(caeserCipher("abcdefghi?", 1))
module.exports = caeserCipher;