function outerFunc(){
    var value=10;

    function innerFunc(){
        console.log(value);
    }
    //value=15;
    return innerFunc;
}

var ans=outerFunc();
console.log(ans.toString());
ans();