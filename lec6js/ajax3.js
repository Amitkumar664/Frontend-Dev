const xhr = new XMLHttpRequest();
xhr.open("PATCH", "http://localhost:3000/posts/5");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
    console.log("Updated:", xhr.responseText);
};
xhr.send(JSON.stringify({
    views: 999
}));