const cart = ["apple", "mango", "banana"];

createOrder(cart)
    .then(function(orderId) {
        proceedToPayment(orderId);
    })
    .catch(function(err) {
        console.log(err.message);
    });

function createOrder(cart) {
    var temp = new Promise(function(resolve, reject) {
        if (validateCart(cart)) {
            reject(new Error("Cart is not valid"));
        }
        const orderId = "1234";
        resolve(orderId);
    });
    console.log(temp);
    return temp;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    console.log("proceed to payment");
    console.log(orderId);
}
