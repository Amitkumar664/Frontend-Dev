let arr=[1,2,3,4];

// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*2;
// }
// console.log(arr); // [2,4,6,8]

// let arr2=arr.map(n =>n*2); //always used with let not used with loop
// console.log(arr2); // [2,4,6,8]
console.log(arr.map(n =>n*2));

// arr.map((n) => {
//     console.log(n*2); 
// }); 

arr.map((n,index) => {
    // console.log("my number is"+n*2,"my index is"+index); 
    console.log(`my number is ${n*2} , my index is ${index}`);
}); 
