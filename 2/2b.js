import { readFileSync } from 'fs';

const input = readFileSync('input.txt', 'utf8').split('\n');

// 1. create json of passwords
const passwords = input.map(line => {
    const [num, letter, password] = line.split(' ');
    const [pos0, pos1] = num.split('-');

    return {
        pos0: parseInt(pos0, 10) -1,
        pos1: parseInt(pos1, 10) -1,
        letter: letter.replace(':', ''),
        password
    }
});

// 2. check vaild func
function isPasswordVaild(passwordInput){
    const foundPos0 = passwordInput.password[passwordInput.pos0] === passwordInput.letter;
    const foundPos1 = passwordInput.password[passwordInput.pos1] === passwordInput.letter;
    return  (foundPos0 && !foundPos1) || (!foundPos0 && foundPos1);
}

// 3. count vaild passwords in json
const found = passwords.filter(isPasswordVaild).length;

// 4. solution
console.log(found);