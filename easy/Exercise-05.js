// write a function that takes an array and return length of the array   without inbuilt method (array.length )

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

const getLengthOfArray = (arr) => {
    let length = 0
    for (let i = 0; arr[i] !== undefined; i++) length++
    return length
}


console.log(getLengthOfArray(arr));