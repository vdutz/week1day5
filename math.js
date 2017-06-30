var version = "0.0.1alpha";

function squared(number) {
  return number * number;
}

function roundToPrecision(number, precision) {
  var precision = precision || 2;  // default precision
  return Number(number).toFixed(precision)
}

function printName(name) {
  console.log(name)
}

module.exports = {
  squared: squared,
  roundToPrecision: roundToPrecision,
  version: version,
  printName: printName
}