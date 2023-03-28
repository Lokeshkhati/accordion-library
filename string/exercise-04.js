// write a function which takes a string, change the letter of string to uppercase which is at even indices  else to lowercase

//  input --> string
// letter at even indices ? uppercase : lowercase

// sample input --> "hello"
// output --> "HeLlO"

const camelLetter = (str) => {
  let letter = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      letter += str[i].toUpperCase();
    } else {
      letter += str[i].toLowerCase();
    }
  }
  return letter;
};

console.log(camelLetter('lokesh'));

