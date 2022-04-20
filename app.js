function findMultiples(integer, limit) {
    let myArr = []
    for (var i = 1; i <= limit / integer; i++) {
        myArr.push(i * integer)
    }
    return myArr;
}

console.log(findMultiples(5, 25));// [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2));// [1, 2]
console.log(findMultiples(5, 7));// [5]
console.log(findMultiples(4, 27));// [4, 8, 12, 16, 20, 24]
console.log(findMultiples(11, 54));// [11, 22, 33, 44]