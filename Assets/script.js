//All the code having to do with the Generate Password button is wrapped in an anonymous function.
// While not applicable here, if hypothetical additional scripts were added to this page, this anonymous function prevents variables in this script from intereferring with new scripts.

(function () {

  // The button to generate the password is now a variable called passwordBtn
  const passwordBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    allItems.length=0;
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Clicking on the button now calls the function writePassword
  passwordBtn.addEventListener("click", writePassword);

  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const number = '0123456789'.split('');
  const specialChar = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\''.split('');
  
  let allItems = [];
  
function generatePassword() {
  //all user input in one object
  const userInput = getUserInput();
  const password = returnRandom(userInput);
  return password;
}

function getUserInput() {
  const userInput = {};
  userInput.passwordLength = window.prompt(
    'Enter desired password length (number of characters):'
    );
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
    return userInput;
}

function returnRandom(input) {
  let password = '';
  for (let i = 0; i < input.passwordLength; i++){
    let selectedItem = allItems[i % allItems.length];
    let possibleChars;
    if (selectedItem === 'lower') {
      possibleChars = lowerCase;
    } else if (selectedItem === 'upper') {
      possibleChars = upperCase;
    } else if (selectedItem === 'numbers') {
      possibleChars = number;
    } else if (selectedItem === 'special') {
      possibleChars = specialChar;
    }
    const index = Math.floor(Math.random() * possibleChars.length);
    const nextChar = possibleChars[index];
    password = password + nextChar;   
  }
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password;
}

//This is the end of the function that is this whole page, and then it is called.
})();

