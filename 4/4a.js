import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n\n');

// 0. Config
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' /* 'cid' */];

// 1. Normalize Passport-Data
function getAttribute(passwort, attribute) {
  const foundAttribute = passwort.find((i) => i.startsWith(attribute));
  if (!foundAttribute) {
    return null;
  }
  return foundAttribute.replace(`${attribute}:`, '');
}

// Normalize break and spaces
const passports = input.map((i) => i.replaceAll('\n', ' ').split(' '));

const parsedPassports = passports.map((i) =>
  requiredFields.reduce((prev, attribute) => {
    return { ...prev, [attribute]: getAttribute(i, attribute) };
  }, {})
);
// 2. func for missing attributes
function validPassport(parsedPassport) {
  return requiredFields.every((i) => parsedPassport[i]);
}

// 3. Count Vaild Passports
const validPasswords = parsedPassports.filter(validPassport).length;
console.log(validPasswords);
