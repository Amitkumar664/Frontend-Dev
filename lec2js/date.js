let now=Date.now();// returns the number of milliseconds since January 1, 1970 00:00:00 UTC
console.log(now);// 1697048578123

let future=new Date(now+1000*60*60*24).getTime();// adding 1 day in milliseconds
console.log(future);// 1697134978123
