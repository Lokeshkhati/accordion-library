// write a function that takes any numbers of arguments of type number and returns the sum of all arguments

const sum = (...args) => {

    let result = 0;
    for (let i = 0; i < args.length; i++) result += args[i]

    return result
}

console.log(sum(2, 3, 4, 5, 6, 7, 8,));