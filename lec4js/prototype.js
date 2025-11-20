let arr=["aakash","amol"];

let object = {
    name: "amit",
    city: "pune",
    getIntro: function() {
        console.log(this.name + " belong to " + this.city);
    }
};

let object2 = {
    name: "amol",
};

object2.__proto__ = object;

object2.getIntro(); // Output: "amol belong to pune"

