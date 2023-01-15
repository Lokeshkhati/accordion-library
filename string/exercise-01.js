// Capitalize first letter of a word or sentence

let sentence = 'the quick brown fox jumped ove the lazy dog'

const capitalizeLWord = sentence.split(' ').map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

).join(' ')

console.log(capitalizeLWord)
