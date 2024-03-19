function welcomeMsg() {
  return "Welcome Hanna";
}
console.log(welcomeMsg());

function calcGrossPrice(a, b) {
  return a * (1 + b);
}
console.log(calcGrossPrice(20, 0.19).toFixed(1));
console.log(calcGrossPrice(40, 0.16).toFixed(1));

// Negativ to positiv Number

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
