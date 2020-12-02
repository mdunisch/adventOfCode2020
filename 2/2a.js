import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. create json of passwords
const passwords = input.map(line => {
    const [ num, letter, password ] = line.split(' ');
    const [ min, max ] = num.split('-');

    return {
        min: parseInt(min, 10),
        max: parseInt(max, 10),
        letter: letter.replace(':', ''),
        password
    }
});

// 2. check vaild func
function isPasswordVaild(passwordInput){
    const letterRegex = new RegExp(passwordInput.letter,'gi');
    const numOccurs = passwordInput.password.match(letterRegex)?.length;

    return numOccurs >= passwordInput.min && numOccurs <= passwordInput.max;
}

// 3. count vaild passwords in json
const found = passwords.filter(isPasswordVaild).length;

// 4. solution
console.log(found);