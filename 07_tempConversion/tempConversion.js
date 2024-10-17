const convertToCelsius = function(input) {

  let output = (input - 32) * (5/9);
  let roundedOutput = Math.round(output * 10) / 10;
  return roundedOutput;

};

const convertToFahrenheit = function(input) {
  let output = (input * (9 / 5)) + 32;
  let roundedOutput = Math.round(output * 10) /10;
  return roundedOutput;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
