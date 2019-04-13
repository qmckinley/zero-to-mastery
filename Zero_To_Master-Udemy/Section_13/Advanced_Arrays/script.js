// Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(numb => {
    double.push(num * 2);
})

console.log("forEach", double);

// forEach
//      [2, 4, 20, 32]

// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

// map
//      [2, 4, 20, 32]

// filter

const filterArray = array.filter(num => num > 5);

console.log("filter", filterArray);

// filter
//      [20, 32]

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log("reduce", reduceArray);

// reduce
//      29