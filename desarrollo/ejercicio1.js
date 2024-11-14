const arr = [23,4,6,7,99,12,19,8,43,21,65]

let res = arr.reduce(
    (sum, item) => sum+item,
    0
);

console.log(res);