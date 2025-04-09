/**
 * Adds two numbers together
 * @param a - First number or string that can be converted to a number
 * @param b - Second number or string that can be converted to a number
 * @returns The sum of the two numbers
 * @throws Error if inputs are invalid or cannot be converted to numbers
 */
export function addSum(a: number | string, b: number | string): number {
  // Input validation
  if (a === null || b === null || a === undefined || b === undefined) {
    throw new Error('Invalid input: Parameters cannot be null or undefined');
  }

  // Convert inputs to numbers
  const num1 = typeof a === 'string' ? a.trim() : a;
  const num2 = typeof b === 'string' ? b.trim() : b;

  // Convert to numbers and validate
  const result1 = Number(num1);
  const result2 = Number(num2);

  if (isNaN(result1) || isNaN(result2)) {
    throw new Error(
      `Invalid input: Cannot convert "${num1}" and/or "${num2}" to numbers`,
    );
  }

  // Check for infinity
  if (!Number.isFinite(result1) || !Number.isFinite(result2)) {
    throw new Error('Invalid input: Numbers must be finite');
  }

  return result1 + result2;
}

// Only run CLI code if not in test environment
if (process.env.NODE_ENV !== 'test') {
  // Read command line arguments
  if (process.argv.length < 4) {
    console.log('Please provide two numbers as arguments');
    console.log('Usage: node index.js <number1> <number2>');
    process.exit(1);
  }

  const num1 = Number(process.argv[2]);
  const num2 = Number(process.argv[3]);

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Please provide valid numbers');
    process.exit(1);
  }

  console.log(`${num1} + ${num2} = ${addSum(num1, num2)}`);
}
