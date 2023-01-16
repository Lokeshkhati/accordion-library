// intersection of arrays

const arr1 = [2, 3, 5, 6, 7, 8, 9,10,11]
const arr2 = [1, 3, 5, 6, 9, 10,11]
const arr3 = [2, 3, 5, 6, 9, 10, 11]

function findIntersection(arr1, arr2, arr3) {
    let result = []
    let i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            result.push(arr1[i])
            i++; j++, k++
        } else if (arr1[i] < arr2[j]) i++
        else if (arr2[j] < arr3[k]) j++
        else k++
        
    }
    return result
}

console.log(findIntersection(arr1, arr2, arr3));