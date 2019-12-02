exports.parse = (input) => {
  const stringNumbers = input.split(', ');
  const numbers = stringNumbers.map(number => parseInt(number, 10));
  return numbers;
};
