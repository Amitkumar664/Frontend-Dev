const xhr = new XMLHttpRequest();

//param1 -> methods type  get, posty put, delete
//endpoint -> endpoint url
//stringfigy object-> json
//parse json -> object
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = function() {
    // console.log(typeof xhr.responseText);
    var data;
    if (xhr.status === 200) {
        // console.log(typeof xhr.responseText);
        data = JSON.parse(xhr.responseText);
        console.log("Received:", data);
    }


    // for (let index = 0; index < 100; index++) {
    //     const element = xhr.responseText[index];
    //     console.log(element);
       
    // }
};
xhr.send();