import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. parse code
const bootCode = input.map((i) => i.split(' '));

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
  bootCode[nextIndex] = null; // delete command so 2nd hit will break

  if (operation === 'acc') {
    accumulator += parseInt(argument, 10);
    nextIndex++;
  } else if (operation === 'jmp') {
    nextIndex += parseInt(argument, 10);
  } else if (operation === 'nop') {
    nextIndex++;
  }
}

console.log(accumulator);
