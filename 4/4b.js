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
  const validations = {
    byr: (byr) => parseInt(byr, 10) >= 1920 && parseInt(byr, 10) <= 2002,
    iyr: (iyr) => parseInt(iyr, 10) >= 2010 && parseInt(iyr, 10) <= 2020,
    eyr: (eyr) => parseInt(eyr, 10) >= 2020 && parseInt(eyr, 10) <= 2030,
    hgt: (hgt) => {
      if (hgt?.includes('cm')) {
        return parseInt(hgt, 10) >= 150 && parseInt(hgt, 10) <= 193;
      }
      if (hgt?.includes('in')) {
        return parseInt(hgt, 10) >= 59 && parseInt(hgt, 10) <= 76;
      }

      return false;
    },
    hcl: (hcl) => hcl?.match(/^#[0-9A-F]{6}$/i),
    ecl: (ecl) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl),
    pid: (pid) => pid?.match(/^[0-9]{9}$/),
  };

  return Object.keys(validations).every((attribute) => validations[attribute](parsedPassport[attribute]));
}

// 3. Count Vaild Passports
const validPasswords = parsedPassports.filter(validPassport).length;
console.log(validPasswords);
