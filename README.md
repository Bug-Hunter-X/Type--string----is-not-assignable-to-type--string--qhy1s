# Type 'string[]' is not assignable to type 'string' in TypeScript

This repository demonstrates a common TypeScript error: attempting to pass an array of strings to a function that expects a single string.

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file provides a corrected version.

## Bug

The function `greeter` expects a single string argument. However, the code attempts to pass an array of strings to it, causing a type error.

## Solution

The solution involves modifying the code to either:

1. Pass a single string to the function.
2. Modify the function to accept an array of strings and iterate through the array to create greetings for each string in the array. 