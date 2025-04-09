export function addSum(number1: number, number2: number): number {
  return number1 + number2;
}

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
