//  palindrome

// const isPalindrome = (str) => {
//     if (!str) return false
//     return str.split('').reverse().join('') === str
// }

// console.log(isPalindrome("mo"));

const isPalindrome = (str) => {
    const length = str.length
    if (length === 0 || length === 1) return true
    if (length === 2) return str[0] === str[1]
    // console.log(str.substring(1, length - 1))
    if (str[0] === str[length - 1]) return isPalindrome(str.substring(1, length - 1))


}

console.log(isPalindrome("racecar"));

/*
working of recursion

 isPalindrome(racecar)
 r==r , isPalindrome(aceca)
 a==a , isPalindrome(cec)
 c==c , isPalindrome(e)
 e.length === 1 true

*/


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring