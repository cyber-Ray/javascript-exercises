const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
  let total = 0;
	for (const num of array) {
    total += num;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
	for (const num of array) {
    total *= num;
  }
  return total;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
  }
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
