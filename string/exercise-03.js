// Write a program that takes two strings and copies smaller strings into a bigger string.

// input --> str1, str2
//  logic --> str1.length>str2.length? str1+=str2 : str2+=str1

const copySmallerStringToBigger = (str1, str2) => str1.length > str2.length ? str1 += str2 : str2 += str1


console.log(copySmallerStringToBigger('lokesh', 'khati'));