// create a function that removes the first and last character of the string

// input --> str = "lokesh"
// output --> str = "okes"

const removeFirstAndLastChar = (str) => {
    return str.slice(1, -1)
}

console.log(removeFirstAndLastChar('lokesh khati'));