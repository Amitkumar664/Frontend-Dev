//higher order fxn
//using Map
const radii = [8, 9, 2, 3];

const getCircumference = function(r) {
    return 2 * Math.PI * r;
} 
const getDiameter = function(r){
    return 2 * r;
} 
const getArea = function(r){
    return Math.PI * r * r;
}
// using map()
console.log(radii.map(getArea));
console.log(radii.map(getCircumference));
console.log(radii.map(getDiameter));

