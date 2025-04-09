# Number Addition Program

A simple TypeScript program that adds two numbers together, with robust input validation and error handling.

## Tech Stack

- **TypeScript**: For type-safe JavaScript development
- **Node.js**: Runtime environment
- **Jest**: Testing framework
- **Docker**: Containerization

## Features

- Adds two numbers together
- Supports both number and string inputs
- Handles various edge cases:
  - Null/undefined values
  - Invalid number strings
  - Infinite numbers
  - Whitespace in string inputs
- Comprehensive error messages
- Command-line interface support

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <folder>
```

2. Install dependencies:

```bash
npm install
```

## Docker

### Building the Docker Image

```bash
# Build the Docker image
docker build -t number-addition .
```

### Running with Docker

```bash
# Run the container
docker run number-addition 5 3
```

### Docker Development

For development with hot-reload:

```bash
# Build and run with volume mounting for development
docker run -v $(pwd):/app -w /app number-addition npm run dev
```

## Usage

### As a Module

```typescript
import { addSum } from './src';

// Using numbers
const result1 = addSum(5, 3); // Returns 8

// Using strings
const result2 = addSum('5', '3'); // Returns 8

// Mixed types
const result3 = addSum(5, '3'); // Returns 8
```

### Command Line Interface

Run the program with two numbers as arguments:

```bash
npm start -- 5 3
# or
node dist/index.js 5 3
```

## Running Tests

```bash
npm test
```

## Error Handling

The program handles various error cases:

- Null or undefined inputs
- Invalid number strings
- Infinite numbers
- Whitespace in string inputs

Example error messages:

```
Invalid input: Parameters cannot be null or undefined
Invalid input: Cannot convert "abc" and/or "3" to numbers
Invalid input: Numbers must be finite
```

## Development

1. Build the TypeScript code:

```bash
npm run build
```

2. Run in development mode:

```bash
npm run dev
```

## License

[Your chosen license]

```

```
