// Given two arrays, your function should return single merged array.

// input --> [1,2,3,4], [5,6,7,8,]
// output --> [1,2,3,4,5,6,7,8]

// 1. concat

// const mergeArray = (arr1, arr2) => arr1.concat(arr2)

const mergeArray = (arr1, arr2) => {
    let result = []

    const pushToArray = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i])
        }
    }

    pushToArray(arr1)
    pushToArray(arr2)
    return result

}



console.log(mergeArray([1, 2, 3, 4], [5, 6, 7, 8,]));