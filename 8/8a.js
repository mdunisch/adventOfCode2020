import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. parse code
const bootCode = input.map((i) => {
  let [operation, argument] = i.split(' ');
  argument = parseInt(argument, 10);
  return [operation, argument];
});

// 2. loop until hit a code twice
let found = false;
let accumulator = 0;
let nextIndex = 0;

while (!found) {
  if (!bootCode[nextIndex]) {
    found = true;
    break;
  }

  const [operation, argument] = bootCode[nextIndex];
  bootCode[nextIndex] = null;

  if (operation === 'acc') {
    accumulator += argument;
    nextIndex++;
  } else if (operation === 'jmp') {
    nextIndex += argument;
    // nop
  } else {
    nextIndex++;
  }
}

console.log(accumulator);
