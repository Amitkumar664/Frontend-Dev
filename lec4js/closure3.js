function parentayer() {
    let parentValue=50;
    function outerFunc(){
        var value=10;
        function innerFunc(){
            console.log(value);
            console.log(parentValue);
        }
        value=15;
        return innerFunc;
    }
    return outerFunc;
}
var ans=parentayer()();
console.log(ans.toString());
ans();    