/* eslint-env mocha */

const chai = require('chai');
const assert = chai.assert;
const callibrator = require('../index');

describe('Chronal Callibration Pt 1', () => {
  context('Parsing', () => {
    it('translates a string into an array of numbers', () => {
      const input = '+1, -2, +3, +1';

      const output = callibrator.parse(input);

      assert.isArray(output);
      assert.deepEqual(output, [1, -2, 3, 1]);
    });
  });
});
