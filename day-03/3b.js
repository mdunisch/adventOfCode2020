import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. create matrix
const field = input.map((i) => i.split(''));

// 2. define options to check
const movement = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

// 3. create checkfunc
function getNumOfTress({ down, right }) {
  let found = 0;
  let x = 0;

  for (let y = 0; y < field.length; y = y + down) {
    if (field[y][x % field[0].length] === '#') {
      found++;
    }

    x = x + right;
  }
  return found;
}

// 4. calucalte sum of all movement-options
const numTrees = movement.reduce((prev, current) => prev * getNumOfTress(current), 1);

console.log(numTrees);
