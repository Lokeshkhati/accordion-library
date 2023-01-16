// find max
const arr = [2, 5000, 8, 90, 456, 3426]

function findMax(arr) {
    let max =0;
    for (elem of arr) {
        if ( max < elem) max = elem
    }
return max
}

console.log(findMax(arr));