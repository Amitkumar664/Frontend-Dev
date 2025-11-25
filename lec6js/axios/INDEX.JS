const axios = require("axios");

const API_URL = "http://localhost:3000/posts&quot;;

// GET Request
axios.get(API_URL)
    .then(response => {
        console.log("GET Response:", response.data);
    })
    .catch(error => console.error("GET Error:", error));


// POST Request
// axios.post(API_URL, {
//     title: "New Post",
//     body: "This is a test post.",
//     userId: 1
// })
//     .then(response => {
//         console.log("POST Response:", response.data);
//     })
//     .catch(error => console.error("POST Error:", error));



// PUT Request (update full record)
// axios.put(`${API_URL}/1`, {
//     title: "Updated Title",
//     body: "Updated content.",
//     userId: 1
// })
//     .then(response => {
//         console.log("PUT Response:", response.data);
//     })
//     .catch(error => console.error("PUT Error:", error));



// DELETE Request
// axios.delete(`${API_URL}/1`)
//     .then(response => {
//         console.log("DELETE Response:", response.data);
//     })
//     .catch(error => console.error("DELETE Error:", error));