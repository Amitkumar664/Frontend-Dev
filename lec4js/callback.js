function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}
processUserInput(function(name) {
    console.log("Hello " + name);
});