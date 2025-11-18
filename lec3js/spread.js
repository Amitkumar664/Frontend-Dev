const a=[1,2];
const b=[3,4];

const merged=[...a,...b];
console.log(merged); // [ 1, 2, 3, 4 ]

const obj1={a:1};
const obj2={b:2};

const mergedObj={...obj1,...obj2};
console.log(mergedObj); // { a: 1, b: 2 }