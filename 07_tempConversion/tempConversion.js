const convertToCelsius = function(temp) {
  return roundToPrecision((temp - 32 ) / 1.8, 1);
};

const convertToFahrenheit = function(temp) {
  return roundToPrecision((temp * 1.8 ) +32, 1);
};

function roundToPrecision(number, precision){
  let base = 10 ** precision;
  return Math.round(number * base) / base; 
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
