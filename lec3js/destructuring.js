const user={
    name:"Alice",
    age:30,
    city:"New York",
    myfunc:function(){
        console.log("Hello from myfunc");
    }
};    

//without destructuring
// const name2=user.name;
// const age2=user.age;
// const city2=user.city;
// user.myfunc();
// console.log(name2,age2,city2); // Alice 30 New York

//with destructuring
const {name,age,city}=user;
console.log(name,age,city); // Alice 30 New York