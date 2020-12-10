import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n\n');

// 1. Make Array of groups with all answers compinated
const groups = input.map((answers) => answers.replaceAll('\n', '').split(''));

// 2. Remove duplicates
const groupsUnique = groups.map((answers) => [...new Set(answers)]);

// 3. Calulate sum of different answers
const sum = groupsUnique.reduce((prev, answers) => prev + answers.length, 0);

console.log(sum);
