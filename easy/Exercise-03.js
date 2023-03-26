// Given a sentence, your functions should return the number of words in the sentence.

const countNumberOfWords = (sentence) => {
    let count = 0
    const trimmedSentence = sentence.trim()
    for (let i = 0; i < trimmedSentence.length; i++) {
        if (trimmedSentence[i] === ' ' && trimmedSentence[i + 1] === ' ') {
            continue;
        }
        else if (trimmedSentence[i] === ' ') {
            count++
        }
    }
    return count + 1
}

console.log(countNumberOfWords('my name lokesh khati'));