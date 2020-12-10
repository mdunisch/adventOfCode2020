import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. create matrix
const field = input.map((i) => i.split(''));
field.shift();

// 2. Count Trees
let index = 0;
const numTrees = field.reduce((trees, currentLine) => {
  index = index + 3;

  if (currentLine[index % currentLine.length] === '#') {
    return trees + 1;
  }
  return trees;
}, 0);

console.log(numTrees);
