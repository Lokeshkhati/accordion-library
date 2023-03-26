// Given an array and an item, your function should return the index at which the item is present.

const getIndex = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return i
    }
    return -1
}

console.log(getIndex([1, 2, 3, 4, 5, 6, 7], 1));