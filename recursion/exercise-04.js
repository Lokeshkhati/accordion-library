// const fizzbuzz = (number) => {

//     for (let i = 1; i <= number; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz')
//         }
//         else if (i % 3 === 0) {
//             console.log('Fizz')
//         }
//         else if (i % 5 === 0) {
//             console.log('Buzz')
//         }
//         else {
//             console.log(i)
//         }
//     }
// }

// fizzbuzz(30)


const fizzbuzz = (startNum, endNum) => {
    if (startNum > endNum) {
        return
    }
    if (startNum % 3 === 0 && startNum % 5 === 0) {
        console.log(`FizzBuzz ${startNum}`)
    }

    else if (startNum % 3 === 0) {
        console.log(`Fizz ${startNum}`)
    }
    else if (startNum % 5 === 0) {
        console.log(`Buzz ${startNum}`)
    }
    else {
        console.log(startNum)
    }


    fizzbuzz(startNum + 1, endNum)
}

fizzbuzz(1, 30)