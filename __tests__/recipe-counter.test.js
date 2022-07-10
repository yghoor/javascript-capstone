import { countRecipes } from '../src/counters.js';

test('countRecipes should return the number of recipes in the array', () => {
  expect(countRecipes([1, 2, 3, 4, 5])).toBe(5);
});