import { addSum } from './index';

describe('addSum', () => {
  it('should correctly add two positive numbers', () => {
    expect(addSum(5, 3)).toBe(8);
  });

  it('should correctly add a positive and a negative number', () => {
    expect(addSum(5, -3)).toBe(2);
  });

  it('should correctly add two negative numbers', () => {
    expect(addSum(-5, -3)).toBe(-8);
  });
});
