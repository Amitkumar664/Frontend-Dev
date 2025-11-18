const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even=nums3.filter(n => n % 2 === 0);
// const reduce=nums3.reduce((acc,currentval)=>{},initialVal);
// console.log(even); // [ 2, 4, 6, 8, 10 ]

const sum=nums3.reduce((acc,curr)=>acc+curr,0);
console.log(sum); // 55

