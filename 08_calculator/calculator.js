const add = function(firstNum, secondNum) {
    let sum = firstNum + secondNum;
    return sum;
	
};

const subtract = function(firstNum, secondNum) {
    let subtract = firstNum - secondNum;
    return subtract;
	
};

const sum = function(array) {
  let arrayLength = array.length;
  let sum = 0

  for (let i = 0; i < arrayLength; i++) {
    sum = sum + array[i];
  }

  return sum;
};

const multiply = function(array ) {
  let arrayLength = array.length;
  let multiply = 1;
  for (let i = 0; i < arrayLength; i++) {
    multiply = multiply * array[i];
  }

  return multiply;
};

const power = function(base, power) {
  let result = (base ** power)
	return result;
};

const factorial = function(input) {
  let result = 1;
  
  if (input === 0) {
    return 1;
  }

  else {
  for (let i = 1; i <= input; i++) {
    
    result = result * i;
  }
}
	
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
