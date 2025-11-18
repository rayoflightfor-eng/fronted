function calculation(calcfunction, num1, num2) {
    console.log(calcfunction(num1, num2));
}
const sum = function(a, b) {
    return a + b;
};
const multiply = function(a, b) {
    return a * b;
};
let num1 = 5;
let num2 = 10;
calculation(sum, num1, num2);      
calculation(multiply, num1, num2);   