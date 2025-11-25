const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/posts&quot;);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
    console.log("Response:", JSON.parse(xhr.responseText));
};

const body = {
    title: "mytitle",
    views: 2
};

xhr.send(JSON.stringify(body));