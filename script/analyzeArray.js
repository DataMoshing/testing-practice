function analyzeArray(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let average = array.reduce((a, b) => a + b) / array.length;
    let length = array.length

    return { min, max, average, length }
}

const object = analyzeArray([1, 2, 4, 5, 6])

console.log(object)

module.exports = analyzeArray;