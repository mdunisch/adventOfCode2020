import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 0. Config
const sumToFind = 36845998;
const sumInputIndex = 533;

// 1. parse code and delete unnecessary input
const numbers = input.map((i) => parseInt(i, 10)).slice(0, sumInputIndex);

// 2. function to check if a sequence is vaild
function checkSequence(sequence) {
  return sequence.reduce((sum, number) => sum + number, 0) === sumToFind;
}

// 3. Find sequence
for (let size = 2; size < sumInputIndex; size++) {
  for (let index = 0; index < sumInputIndex - size; index++) {
    const sequence = numbers.slice(index, index + size);
    if (checkSequence(sequence)) {
      console.log(Math.min(...sequence) + Math.max(...sequence));
      break;
    }
  }
}
