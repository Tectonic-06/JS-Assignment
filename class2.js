class Shape {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `This is a shape: ${this.name}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle"); // Call the parent constructor
        this.radius = radius;
    }

    // Method to calculate area
    area() {
        return Math.PI * this.radius ** 2;
    }
}

// Example usage:
const circle = new Circle(4);
console.log(circle.describe()); // Output: This is a shape: Circle
console.log(`Area of the circle: ${circle.area()}`); // Output: Area of the circle: 50.26548245743669
