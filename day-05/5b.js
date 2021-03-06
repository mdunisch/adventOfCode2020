import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. function to the get row of a sequence
function getRow(sequence) {
  let min = 0;
  let max = 127;

  for (let i = 0; i < 7; i++) {
    if (sequence[i] === 'F') {
      max = Math.floor((max + min) / 2);
    } else {
      min = Math.ceil((max + min) / 2);
    }
  }

  return min;
}

// 2. function to the get col of a sequence
function getColum(sequence) {
  let min = 0;
  let max = 7;

  for (let i = 7; i < 10; i++) {
    if (sequence[i] === 'L') {
      max = Math.floor((max + min) / 2);
    } else {
      min = Math.ceil((max + min) / 2);
    }
  }

  return min;
}

// 3. generate row, col and seat ID for all people
const boradingPasses = input.map((sequence) => {
  const row = getRow(sequence);
  const col = getColum(sequence);

  return {
    sequence,
    row,
    col,
    seatId: row * 8 + col,
  };
});

// 4. Get highest and lowest IDs
const highestSeat = boradingPasses.sort((i, x) => x.seatId - i.seatId)[0].seatId;
const lowestSeat = boradingPasses.sort((i, x) => i.seatId - x.seatId)[0].seatId;

// 5. Find missing SeatId
let missingSeatId;
for (let i = lowestSeat; i < highestSeat; i++) {
  if (!boradingPasses.find((pass) => pass.seatId === i)) {
    missingSeatId = i;
    break;
  }
}

console.log(missingSeatId);
