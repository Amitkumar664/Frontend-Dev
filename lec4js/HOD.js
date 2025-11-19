//higher order fxn

const radii = [8, 9, 2, 3];

const getCircumference = function(r) {
    return 2 * Math.PI * r;
}

const getDiameter = function(r) {
    return 2 * r;
}

const getArea = function(r) {
    return Math.PI * r * r;
}

const applyCalculation = function(radiiArray, operation) {
    // console.log(operation.toString());
    const results = [];
    for (let i = 0; i < radiiArray.length; i++) {
        const current = radiiArray[i];
        results.push(operation(current));
    }
    return results;
}

console.log(applyCalculation(radii, getArea));
console.log(applyCalculation(radii, getCircumference));
console.log(applyCalculation(radii, getDiameter));


//using Map
