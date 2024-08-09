const add = function(a , b) {
	return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
  let result = 0;
	arr.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(args) {
  let result = 1;
  args.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(a, b) {
  let result = 1;
  for(let i = 0; i<b; i++){
    result = multiply([result, a]);
  }
  return result;
};

const factorial = function(a) {
	let result = 1;
	for(let i = 1; i<=a; i++){
    result *= i;
  };
  return result;
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
