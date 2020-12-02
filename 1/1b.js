import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8')
  .split('\n')
  .map((i) => parseInt(i, 10));

// 1. create matrix
let numberMatrix = input.map((i) => input.map((x) => input.map((z) => [i, x, z])));

// 2. flat and remove duplicate
numberMatrix = numberMatrix.flat(2).filter(([x, y, z]) => x !== y && y !== z);

// 3. find right element
const found = numberMatrix.find(([x, y, z]) => x + y + z === 2020);

// 4. solution
console.log(found[0] * found[1] * found[2]);
