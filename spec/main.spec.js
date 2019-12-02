/* eslint-env mocha */

const chai = require('chai');
const assert = chai.assert;
const callibrator = require('../index');
const fullInput = require('./fullInput');

describe('Chronal Callibration Pt 1', () => {
  context('Parsing', () => {
    it('translates a string into an array of numbers', () => {
      const input = '+1, -2, +3, +1';

      const output = callibrator.parse(input);

      assert.isArray(output);
      assert.deepEqual(output, [1, -2, 3, 1]);
    });
  });

  context('Calculate Final Frequency', () => {
    it('return 3 for the test input', () => {
      const input = '+1, -2, +3, +1';

      const output = callibrator.calculateFinal(input);

      assert.isOk(output);
      assert.equal(output, 3);
    });

    it('return 0 for an inverted set (i.e. same positives as negatives)', () => {
      const input = '+1, +2, -2, -1';

      const output = callibrator.calculateFinal(input);

      assert.equal(output, 0);
    });
  });

  context('solution', () => {
    it('finds the solution for pt1', () => {
      const output = callibrator.calculateFinal(fullInput);

      assert.equal(output, 472);
    });
  });
});

describe('Chronal Callibration Pt 2', () => {
  it('finds the solution for the given test input', () => {
    const input = '+1, -2, +3, +1';

    const output = callibrator.calculateFirstRepeated(input);

    assert.equal(output, 2);
  });

  it('finds the solution for the full test data set', () => {
    const output = callibrator.calculateFirstRepeated(fullInput);

    assert.equal(output, 66932);
  });
});
