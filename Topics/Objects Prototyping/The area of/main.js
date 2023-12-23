const shape = {
    height: 5,
    width: 4,
    calculateArea() {
        return 0;
    }
};

/* Do not change code above */

const rectangle = Object.create(shape);
rectangle.calculateArea = function () {
    return this.height * this.width;
};

const triangle = Object.create(shape);
triangle.calculateArea = function () {
    return this.height * this.width / 2;
};

/* Do not change code below */

console.log(rectangle.calculateArea());
console.log(triangle.calculateArea());