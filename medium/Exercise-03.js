// Given an array and two numbers, your function should replace all entries of the first number in an array with the second number.

//   input --> array, num1, num2
// array[index]===num1 && num1 = num2

const replace = (arr, num1, num2) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num1) {
            arr[i] = num2
        }
    }
    console.log(arr)
}

replace([1, 5, 3, 5, 5, 10, 7,], 5, 6)
// expected output  : [1,6,3,6,6,10,7]