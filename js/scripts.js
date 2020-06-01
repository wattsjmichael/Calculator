const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number"));

const add = function(number1, number2) {
  return number1 + number2;
};

const sub = function(number1, number2) {
  return number1 - number2;
};

const mult = function(number1, number2) {
  return number1* number2;
};

const div = function(number1, number2) {
  return number1 / number2;
};

//alert(add(number1, number2));
//alert(sub(number1, number2));
//alert(mult(number1, number2));
alert(div(number1, number2));
