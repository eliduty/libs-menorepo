import { describe, expect, test } from 'vitest';
import { sumFunction } from '@eliduty/test';
describe('sumFunction', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sumFunction(1, 2)).toBe(3);
  });
});
