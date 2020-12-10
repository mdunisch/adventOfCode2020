import { readFileSync } from 'fs';
import { default as intersection } from 'lodash/intersection.js'; // Missing Fix for node module: https://github.com/lodash/lodash/issues/4800

const input = readFileSync('input.txt', 'utf8').split('\n\n');

// 1. Make Array of groups and answers
const groups = input.map((answers) => answers.split('\n').map((i) => i.split('')));

// 2. Make an intersection of the answers in each group
const groupWithIntersection = groups.map((i) => intersection(...i));

// 3. Calulate sum of differnt answers
const sum = groupWithIntersection.reduce((prev, answers) => prev + answers.length, 0);

console.log(sum);
