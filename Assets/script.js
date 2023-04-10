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

// Next, the two functions used in generatePassword are defined:

function getUserInput() {
  const userInput = {};
  userInput.passwordLength = window.prompt(
    'Enter desired password length (number of characters):'
    );
    //❌DON'T FORGET TO GET RID OF THIS CONSOLE LOG❌
    console.log(userInput.passwordLength + ' characters');
    userInput.includeSpecialChar = confirm("Include special characters? (OK = yes, cancel = no)");
    //❌DON'T FORGET TO GET RID OF THIS CONSOLE LOG❌
    console.log('Include special characters:' + userInput.includeSpecialChar);
  return userInput;
}

function returnRandom(input) {
  let password = '';
  for (let i = 0; i < input.passwordLength; i++){
    password = generateNextChar(password, input);
  }
  return password;
}

// Next are the arrays that will be used in the following functions:

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const number = '0123456789'.split('');
const specialChar = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\''.split('');

let lowerCaseRandomIndex = Math.floor(Math.random() * lowerCase.length);
let lowerCaseItems = lowerCase[lowerCaseRandomIndex];

let upperCaseRandomIndex = Math.floor(Math.random() * upperCase.length);
let upperCaseItems = upperCase[upperCaseRandomIndex];

let numberRandomIndex = Math.floor(Math.random() * number.length);
let numberItems = number[numberRandomIndex];

let specialCharRandomIndex = Math.floor(Math.random() * specialChar.length);
let specialCharItems = specialChar[specialCharRandomIndex];

//❌vvvvv THIS IS JUST A TEST vvvvv❌
let all = [lowerCaseItems, upperCaseItems, numberItems, specialCharItems]
for (i = 0; i < 4; i++){
  console.log(all[i])
}
//❌^^^^^ THIS IS JUST A TEST ^^^^^❌

let allItems = []

if //user selects lower case, then push lowerCaseItems to allItems, etc

function generateNextChar(password, input){
  const lastChar = password === '' ? '' : password.at(-1);
 
 
  const nextChar = lastChar === '' ? 'A' : 'a';
  password = password + nextChar;
  return password;

     
    
  };
})();

//var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// (?=.*specialChar) // means somewhere after is something from specialChar