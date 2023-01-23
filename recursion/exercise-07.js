// sum of digits

// 12345  = 1+2+3+4+5 = 15

function sumOfDigits(n) {
    if (n / 10 === 0) {
        return n
    }
    let remainder = n % 10
    n = n / 10
    return (remainder + sumOfDigits(n))

}

console.log(sumOfDigits(1234)) 