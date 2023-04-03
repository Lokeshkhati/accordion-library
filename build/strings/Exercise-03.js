// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

const checkIfStrLengthGreaterThan7 = (str) => {
    let isStrLengthGreaterThan7 = false
    let count = 0

    for (let i = 0; str[i] !== undefined; i++) {
        count++
    }
    if (count > 7) {
        isStrLengthGreaterThan7 = true
    } 


    return isStrLengthGreaterThan7
}

console.log(checkIfStrLengthGreaterThan7('12khati'));