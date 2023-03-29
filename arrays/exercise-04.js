//  given array of numbers return average 

const numbers = [13, 16, 23, 67, 45, 90]

// input  --> arr 
//  average = sum of numbers / length of the array

const getAverage = (numbers) => {
    let sum = average = 0
    const length = numbers.length

    for (let i = 0; i < length; i++) sum = sum + numbers[i]

    average = sum / length

    return average.toFixed(2)
}
console.log(getAverage(numbers));
