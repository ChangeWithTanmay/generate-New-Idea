const lowerCase = true;
const upperCase = true;
const number = true;
const symbol = true;

const inputNum = 5;
let password = '';
let charValue = '';
const lowerCaseValue = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseValue = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersValue = '0123456789';
const symbolsValue = '!@#$%^&*()_+|?/><[]{}-~';


if(lowerCase){
  charValue += lowerCaseValue;
}
if(upperCase){
  charValue += upperCaseValue;
}
if(number){
  charValue += numbersValue;
}
if(symbol){
  charValue += symbolsValue;
}

for(let i=0; i<15; i++){
  const CharIndex = Math.round(Math.random()*charValue.length);
  const randomNumber = charValue.charAt(CharIndex);
  // console.log(randomNumber)
  password = password + randomNumber;
}
console.log(`Random password is: ${password}`);
