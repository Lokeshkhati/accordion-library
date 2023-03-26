// Given length of a regular hexagon, your function should return area of the hexagon.

const getHexagonArea = (sideLength) => ((3 * Math.sqrt(3) / 2) * Math.pow(sideLength, 2)).toFixed(2)

console.log(getHexagonArea(5));