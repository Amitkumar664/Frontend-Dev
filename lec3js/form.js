let user = {
  name: "Aakash",
  age: 22,
  isAdmin: true
};

console.log(typeof user);
console.log(user);


let jsonData = `{
  "name": "Aakash",
  "age": 22,
  "isAdmin": true
}`;

console.log(typeof jsonData);
console.log(jsonData);


console.log("\n -----------------------------------  ");
let temp = JSON.stringify(user);
console.log(typeof temp);
console.log(temp);


console.log(" \n ++++++++++++++++++++++++++++++++++++++++  ");
let temp2 = JSON.parse(jsonData);
console.log(typeof temp2);
console.log(temp2);




// JSON cannot contain:
//   functions
//   comments
//   undefined
//   Infinity
//   NaN
//   single quotes
//   trailing commas



// | JavaScript Object    | JSON                  |
// | -------------------- | --------------------- |
// | Real object          | String                |
// | Used in code         | Used for data sharing |
// | Can store anything   | Very strict rules     |
// | No conversion needed | Need parse/stringify  |