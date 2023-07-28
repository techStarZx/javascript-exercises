const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	let sum = arr.reduce((accumulator, currentValue) => currentValue += accumulator, 0);
  return sum;
};

const multiply = function(arr) {
  let result = arr.reduce((accumulator, currentValue) => currentValue *= accumulator);
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0 || n === 1)
    return 1;
  return n * factorial(n -1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
