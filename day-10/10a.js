import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. parse code
const adapters = input.map((i) => parseInt(i, 10));

// 2. order elements
const orderedAdapters = adapters.sort((a, b) => a - b);

// 3. reduce through the adapters
let jolt = 0;
const adaptersChain = orderedAdapters.reduce(
  (result, adapter) => {
    const differnce = adapter - jolt;
    result['diff' + differnce]++;
    jolt += differnce;
    return result;
  },
  { diff1: 0, diff2: 0, diff3: 1 } // Start with diff3 of 1 because of the device's built-in adapter
);

// 4. calulate solution
const solution = adaptersChain.diff1 * adaptersChain.diff3;
console.log(solution);
