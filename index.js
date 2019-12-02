const parse = (input) => {
  const stringNumbers = input.split(', ');
  const numbers = stringNumbers.map(number => parseInt(number, 10));
  return numbers;
};
exports.parse = parse;

exports.calculateFinal = (input) => {
  const parsedInput = parse(input);

  return parsedInput.reduce((total, current) => total + current, 0);
};
