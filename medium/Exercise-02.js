// Given an array, your function should return the length of the array.

const getLength = (arr) => {
    let length = 0
    for (let i = 0; arr[i] !== undefined; i++) {
        length++
    }
    return length
}

console.log(getLength([1, 2, 3, 4, 5, 6, 7]));