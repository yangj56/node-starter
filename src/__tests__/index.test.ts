import { addSum } from '../index';

describe('addSum', () => {
  test('adds two positive numbers correctly', () => {
    expect(addSum(2, 3)).toBe(5);
    expect(addSum(10, 20)).toBe(30);
  });

  test('adds two negative numbers correctly', () => {
    expect(addSum(-2, -3)).toBe(-5);
    expect(addSum(-10, -20)).toBe(-30);
  });

  test('adds positive and negative numbers correctly', () => {
    expect(addSum(2, -3)).toBe(-1);
    expect(addSum(-10, 20)).toBe(10);
  });

  test('handles decimal numbers correctly', () => {
    expect(addSum(2.5, 3.7)).toBeCloseTo(6.2);
    expect(addSum(-1.5, 2.8)).toBeCloseTo(1.3);
  });

  test('handles string number inputs correctly', () => {
    expect(addSum('2', '3')).toBe(5);
    expect(addSum('-10', '20')).toBe(10);
    expect(addSum('2.5', '3.7')).toBe(6.2);
  });

  test('handles mixed string and number inputs correctly', () => {
    expect(addSum(2, '3')).toBe(5);
    expect(addSum('10', 20)).toBe(30);
  });

  test('throws error for invalid string inputs', () => {
    expect(() => addSum('abc', '3')).toThrow('Invalid input');
    expect(() => addSum('2', 'def')).toThrow('Invalid input');
    expect(() => addSum('abc', 'def')).toThrow('Invalid input');
  });

  test('throws error for null or undefined inputs', () => {
    expect(() => addSum(null as unknown as number, 3)).toThrow('Invalid input');
    expect(() => addSum(2, undefined as unknown as number)).toThrow(
      'Invalid input',
    );
    expect(() =>
      addSum(null as unknown as number, undefined as unknown as number),
    ).toThrow('Invalid input');
  });

  test('throws error for NaN inputs', () => {
    expect(() => addSum(NaN, 3)).toThrow('Invalid input');
    expect(() => addSum(2, NaN)).toThrow('Invalid input');
    expect(() => addSum(NaN, NaN)).toThrow('Invalid input');
  });
});
