// Question 1: ES6 Features
// lowerCaseWords takes a mixed array, keeps only the strings
// and returns them in lower case through a promise.

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject(new Error('Input must be an array'))
            return
        }

        const words = arr
            .filter((item) => typeof item === 'string')
            .map((word) => word.toLowerCase())

        resolve(words)
    })
}

lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((err) => console.error(err.message))

module.exports = lowerCaseWords
