import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. parse code
const numbers = input.map((i) => parseInt(i, 10));

// 2. function to check if number array item is valid
function checkItem(index) {
  const elementsToSum = numbers.slice(index - 25, index);
  return elementsToSum.some((a) => elementsToSum.some((b) => b !== a && b + a === numbers[index]));
}

// 3. check all Elements until found wrong
for (let i = 25; i < numbers.length; i++) {
  if (!checkItem(i)) {
    console.log(numbers[i]);
    break;
  }
}
