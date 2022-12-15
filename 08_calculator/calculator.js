const add = function(x, y) {
  return x + y;
};

const subtract = function(x , y) {
  return x - y;
};

const sum = function(arr) {
  let total = 0;
  if (arr.length == 0) {
    return total;
  } else {
    for (let i = 0; i < arr.length; i++) {
      total += arr[i]
    }
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  if (arr.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      total *= arr[i]
    }
  }
  return total;
};

const power = function(x, y) {
  return x ** y;
};

const factorial = function(x) {
  let total = 1;
  
  for (let i = 1; i <=x; i++) {
      total *= i;
    }

  return total;
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
