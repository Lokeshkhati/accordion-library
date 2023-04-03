
const findLongestAndSmallest = (str1, str2, str3) => {
    let longest = ''
    let smallest = ''
    if (str1.length >= str2.length && str1.length >= str3.length) longest = str1

    else if (str2.length >= str1.length && str2.length >= str3.length) longest = str2

    else longest = str3

    if (str1.length <= str2.length && str1.length <= str3.length) smallest = str1

    else if (str2.length <= str1.length && str2.length <= str3.length) smallest = str2

    else smallest = str3


    return { longest, smallest }
}
console.log(findLongestAndSmallest('lokeshkhati', 'prince', 'omkar'));

