// factorial = number * factorial(number-1)

// 5! = 5*4!
// 4! = 4*3!
// 3! = 3*2!
// 2! = 2*1!
// 1! = 1*0!
// 0! = 1


const factorial = (number) => {
    if (number === 0) {
        return 1
    }
    return number * factorial(number - 1)

}

console.log(factorial(5));




