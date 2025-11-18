const user={
    name:"Alice",
    age:30,
    city:"New York",
}

const {name,...others}=user;
console.log(name);
console.log(others); // { age: 30, city: 'New York' }