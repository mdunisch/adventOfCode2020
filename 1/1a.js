import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n').map(i => parseInt(i, 10));

// 1. create matrix
let numberMatrix = input.map(i => input.map(x => [i, x]));

// 2. flat and remove duplicate
numberMatrix = numberMatrix.flat().filter(([x, y]) => x !== y);

// 3. find right element
const found = numberMatrix.find(([x, y]) => x+y === 2020);

// 4. solution
console.log(found[0] * found[1]);