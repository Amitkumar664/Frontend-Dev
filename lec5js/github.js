
const GITHUB_API = "https://api.github.com/users/aakash-120";

const user = fetch(GITHUB_API)
.then(res=> res.json())
.then(data => console.log(data));
console.log(user);
