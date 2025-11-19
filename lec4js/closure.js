function x() {
    var a = 10;
    function y() {
        console.log(a);
    }   
    y();
}
x();

//clousure:functionbind together with lexical parent scope