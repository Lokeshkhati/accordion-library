//Given array of numbers,  create a function that returns the sum of positive numbers

const numbers = [1, 2, -3, 4, -5, 6, 7, -8]

// input --> arr
// positive num= arr[i]>0

const sumOfPositiveNumbers = (numbers) => {
    let sum = 0;
    const length = numbers.length

    for (let i = 0; i < length; i++) {
        if (numbers[i] > 0) {
            sum = sum + numbers[i]
        }
    }
return sum
}

console.log(sumOfPositiveNumbers(numbers));