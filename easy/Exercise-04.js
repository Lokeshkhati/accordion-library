// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

const getMin = (...args) => {
    let min = args[0]
    for (let i = 1; i < args.length; i++) {
        if (min > args[i]) min = args[i]
    }
    return min
}
console.log(getMin(2, 5, 6, 1, 80, 100));