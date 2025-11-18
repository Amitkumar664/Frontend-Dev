
const students = [
  { name: "PRINCE", grade: "A" },
  { name: "AMAN", grade: "A" },
  { name: "RAHUL", grade: "B" }
];

const answer = students.reduce((acc, curr) => {
  console.log("acc= ", acc);
  console.log("curr=", curr);
  console.log("acc[curr.grade] || [] =", acc[curr.grade] || []);
  (acc[curr.grade] = acc[curr.grade] || []).push(curr);
  return acc;
}, {});

console.log("Final Answer =", answer);