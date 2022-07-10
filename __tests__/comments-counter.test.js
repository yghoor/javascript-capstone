import { countComments } from '../src/counters.js';

test('countComments should return the number of comments in the array', () => {
  expect(countComments([1, 2, 3, 4, 5])).toBe(5);
});