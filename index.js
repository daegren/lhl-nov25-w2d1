const parse = (input) => {
  const stringNumbers = input.split(', ');
  const numbers = stringNumbers.map(number => parseInt(number, 10));
  return numbers;
};
exports.parse = parse;

exports.calculateFinal = (input) => {
  const parsedInput = parse(input);

  const adder = (a, b) => a + b;
  return parsedInput.reduce(adder, 0);
};

exports.calculateFirstRepeated = (input) => {
  const parsedInput = parse(input);

  const trackingObject = {};
  let i = 0;
  let found = null;
  let total = 0;

  while (found === null) {
    const currentFrequency = parsedInput[i];

    total += currentFrequency;

    if (trackingObject[total]) {
      found = total;
    } else {
      trackingObject[total] = true;
    }

    i = (i + 1) % parsedInput.length;
  }

  return found;
};

// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
// 0, 1, 2, 3, 4, 0, 1, 2, 3, 4
