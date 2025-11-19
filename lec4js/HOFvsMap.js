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

Array.prototype.applyCaculation = function(operation){
    const results = [];
    for (let i = 0; i < this.length; i++) {
        const current = this[i];
        console.log("this:", this[i]);
        results.push(operation(current));
    }
    return results;
}
console.log(radii.map(getCircumference));
// console.log(radii.applyCaculation(getArea));
console.log(radii.applyCaculation(getCircumference));
// console.log(radii.applyCaculation(getDiameter));