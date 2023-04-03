// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

const vowels = ['a', 'e', 'i', 'o', 'u']
const removeVowels = (str) => {

    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            result += str[i]
        }
    }

    return result
}

console.log(removeVowels('LOKESH'));

// input--> lokesh
// output--> lksh