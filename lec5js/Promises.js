const cart=["apple","banana","orange"];
createOrder(cart)
.then(function(orderId){
    procedtopayment(orderId);
})
.catch(function(err){
    console.log(err.message);
});
function createOrder(cart){
    return new Promise(function(resolve,reject){
        if(!Validitycart(cart)){
          
            reject(new Error("cart is not valid"    ));
        }
        else{
            const orderId=Math.floor(Math.random()*10000);
            resolve(orderId);
        }
    });