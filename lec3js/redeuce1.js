const students=[
    {name:'Alice', grade:"A"},
    {name:'Bob', grade:"B"},
    {name:'Charlie', grade:"A"}
];

// const Count = students.reduce((acc, curr) => {
//     acc[curr.grade] = (acc[curr.grade] || 0) + 1;
//     return acc;
// }, {});

const Count = students.reduce((acc, curr) => {
    console.log("acc=",acc);
    console.log("curr=",curr);
    console.log("acc[curr.grade] || [] =", acc[curr.grade] || []);
    console.log("-------------------------");
    acc[curr.grade] = (acc[curr.grade] || []).push(curr);
    return acc;
}, {});
console.log(Count);   // Output: { A: 2, B: 1 }