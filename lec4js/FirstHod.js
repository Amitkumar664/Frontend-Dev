const radius = [8,9,2,3];
const calculateCircumference = function (radius){
    const output = [];
    for (let index = 0; index < radius.length; index++) {
            output.push(2* Math.PI * radius[index]);
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateArea = function (radius){
    const output = [];
    for (let index = 0; index < radius.length; index++) {
        output.push( Math.PI * radius[index] *radius[index]);
    }
    return output;
}

console.log(calculateArea(radius));


const calculateDiameter = function (radius){
    const output = [];
    for (let index = 0; index < radius.length; index++) {
            output.push( 2 * radius[index] );
    }
    return output;
}

console.log(calculateDiameter(radius));