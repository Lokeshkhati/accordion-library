// const counter = (number) => {
//     while (number >=0) {
//         console.log(number)
//         number--
//     }
// }
// counter(10)
const counter = (number) => {
    console.log(number)
    if (number === 0) {
        return
    }
    return counter(number - 1)
}
counter(5)

// Print n numbers
const print = (n) => {

    if (n === 0) return n

    print(n - 1)
    console.log(n)

}
print(10)