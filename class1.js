class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    // Method to calculate area
    area() {
        return this.length * this.width;
    }
}

// Example usage:
const rect = new Rectangle(5, 3);
console.log(`Area of the rectangle: ${rect.area()}`); // Output: Area of the rectangle: 15
