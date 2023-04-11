//All the code having to do with the Generate Password button is wrapped in an anonymous function.
// While not applicable here, if hypothetical additional scripts were added to this page, this anonymous function prevents variables in this script from intereferring with new scripts.

(function () {

  // The button to generate the password is now a variable called passwordBtn
  const passwordBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Clicking on the button now calls the function writePassword
  passwordBtn.addEventListener("click", writePassword);


//MY CODE BELOW
//access a random index in that array
//specifiy how many random indeces to access

function generatePassword() {
  //all user input in one object
  const userInput = getUserInput();
  const password = returnRandom(userInput);
  return password;
}

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const number = '0123456789'.split('');
const specialChar = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\''.split('');

let allItems = [];

function getUserInput() {
  const userInput = {};
  userInput.passwordLength = window.prompt(
    'Enter desired password length (number of characters):'
    );
    //❌CONSOLE LOG ALERT❌
    console.log(userInput.passwordLength + ' characters');
    userInput.includeLowerCase = confirm(
      "Include lower case characters? (OK = yes, cancel = no)"
      );
    userInput.includeUpperCase = confirm(
      "Include upper case characters? (OK = yes, cancel = no)"
      );
    userInput.includeNumbers = confirm(
      "Include numbers? (OK = yes, cancel = no)"
      );
    userInput.includeSpecialChar = confirm(
      "Include special characters? (OK = yes, cancel = no)"
      );
    if(userInput.includeLowerCase){
      allItems.push('lower');
    }
    if(userInput.includeUpperCase){
      allItems.push('upper');
    }
    if(userInput.includeNumbers){
      allItems.push('numbers');
    }
    if(userInput.includeSpecialChar){
      allItems.push('special');
    }
    //❌CONSOLE LOG ALERT❌
    console.log("this is the allItems array: " 
    + allItems);
    return userInput;
}

// function returnRandom(input) {
//   let password = '';
//   for (let i = 0; i < input.passwordLength; i++){
//     password = generateNextChar(password, input);
//   }
//   return password;
// }

let lowerCaseRandomIndex = Math.floor(Math.random() * lowerCase.length);
let lowerCaseRandom = lowerCase[lowerCaseRandomIndex];

let upperCaseRandomIndex = Math.floor(Math.random() * upperCase.length);
let upperCaseRandom = upperCase[upperCaseRandomIndex];

let numberRandomIndex = Math.floor(Math.random() * number.length);
let numberRandom = number[numberRandomIndex];

let specialCharRandomIndex = Math.floor(Math.random() * specialChar.length);
let specialCharRandom = specialChar[specialCharRandomIndex];

let includesLower = allItems.includes('lower')
let includesUpper = allItems.includes('upper')
let includesNumbers = allItems.includes('numbers')
let includesSpecial = allItems.includes('special')

if(includesLower){lowerCaseRandom};
if(includesUpper){upperCaseRandom};
if(includesNumbers){numberRandom};
if(includesSpecial){specialCharRandom};

function returnRandom(input) {
  let password = '';
  for (let i = 0; i < input.passwordLength; i++){
    let selectedItem = allItems[i % allItems.length];
    let possibleChars;
    if (selectedItem === 'upper') {
      possibleChars = upperCase;
    } else if (selectedItem === 'lower') {
      possibleChars = lowerCase;
    } else if (selectedItem === 'numbers') {
      possibleChars = number;
    } else if (selectedItem === 'special') {
      possibleChars = specialChar;
    }
    const index = Math.floor(Math.random() * possibleChars.length);
    const nextChar = possibleChars[index];
    password = password + nextChar;
    console.log(password);    
  }
  return password;
}


})();


