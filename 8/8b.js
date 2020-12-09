import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. parse code
const bootCode = input.map((i) => {
  let [operation, argument] = i.split(' ');
  argument = parseInt(argument, 10);
  return [operation, argument];
});

// 2. generate code alternatives to check
const toCheck = [];
bootCode.forEach(([operation, argument], index) => {
  if (operation === 'jmp') {
    const newAlternative = [...bootCode];
    newAlternative[index] = ['nop', argument];
    toCheck.push(newAlternative);
  } else if (operation === 'nop') {
    const newAlternative = [...bootCode];
    newAlternative[index] = ['jmp', argument];
    toCheck.push(newAlternative);
  }
});
console.log(`${toCheck.length} to check`);

// 3. generate function to check if code is right
function checkCode(code) {
  let found = false;
  let accumulator = 0;
  let nextIndex = 0;

  while (!found || nextIndex !== code.length) {
    if (!code[nextIndex]) {
      found = true;
      break;
    }

    const [operation, argument] = code[nextIndex];
    code[nextIndex] = null;

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

  if (nextIndex !== code.length) {
    return false;
  }

  return accumulator;
}

// 4. check each alternative
for (let code of toCheck) {
  const lastAccumulator = checkCode(code);
  if (lastAccumulator) {
    console.log(lastAccumulator);
    break;
  }
}
