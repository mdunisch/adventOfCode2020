import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. parse code
const numbers = input.map((i) => parseInt(i, 10));

// 2. function to check if number array item is valid
function checkItem(index) {
  const elementsToSum = numbers.slice(index - 25, index);
  const options = elementsToSum.map((i, index) => elementsToSum.map((number) => [elementsToSum[index], number]));
  const clearedoptions = options
    .flat(1)
    .map((numbers) => {
      const [a, b] = numbers;
      if (a > b) {
        return [b, a];
      }
      return [a, b];
    })
    .filter(([a, b]) => a != b);

  return clearedoptions.some(([a, b]) => a + b === numbers[index]);
}

// 3. check all Elements until found wrong
for (let i = 25; i < numbers.length; i++) {
  if (!checkItem(i)) {
    console.log(numbers[i]);
    break;
  }
}
