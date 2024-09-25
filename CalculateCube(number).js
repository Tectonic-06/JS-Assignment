function calculateCube(number) {
    if (typeof number !== 'number') {
        return "Please provide a valid number.";
    }
    return number ** 3; // Alternatively, you can use Math.pow(number, 3)
}

// Example usage:
const number = 4;
const cube = calculateCube(number);
console.log(`The cube of ${number} is: ${cube}`);
