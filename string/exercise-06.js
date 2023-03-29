// create a function which takes a sentence as a parameter, and returns the longest word  in the sentence

const getLongestWord = (sentence) => {
    const words = sentence.split(' ')
    let longestWord = ''

    for (let word of words) if (word.length > longestWord.length) longestWord = word

    return longestWord

}

console.log(getLongestWord("hey! Lokesh singhkhati this side"));