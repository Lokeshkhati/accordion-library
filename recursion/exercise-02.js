// Sum of Array



// const sumOfNumber=(number)=>{

//     if(number===0){
//         return number
//     }
//     return number +sumOfNumber(number-1)
//     }

// const result = sumOfNumber(6)
// console.log(result);

const numbers = [1, 2, 3, 4, 5, 6]

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum)

const sum = (array, index) => {

    if (index === array.length - 1) {
        console.log(`BASE CASE index ${index} `)
        console.log(`Total at index ${index} is  ${array[index]} `)
        return array[index]
    }
    console.log(`Index ${index} `)
    const total = array[index] + sum(array, index + 1)
    console.log(`Total at index ${index} is  ${total}`)
    return total
}

const result = sum(numbers, 0)
console.log(result);