//All the code having to do with the Generate Password button is wrapped in an anonymous function. While not applicable here, if hypothetical additional scripts were added to this page, this anonymous function prevents variables in this script from intereferring with new scripts.
(function () {

  //The button to generate the password is now a variable called passwordBtn
  const passwordBtn = document.querySelector("#generate");

  //Write password to the #password input
  function writePassword() {
    allItems.length=0;
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  //Clicking on the button now calls the function writePassword
  passwordBtn.addEventListener("click", writePassword);

  //Arrays of all characters in each possible character types are created
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const number = '0123456789'.split('');
  const specialChar = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\''.split('');
  
  //An empty array of the user's chosen character types is created, to be added to in a later function
  let allItems = [];

  //This function will generate the password based on the input from the following two functions
function generatePassword() {
  const userInput = getUserInput();
  const password = returnRandom(userInput);
  return password;
}

//The getUserInput function gathers the two types of input from the user: desired password length, and the types of charaters the user would like in their password
function getUserInput() {
  //The variable userInput is declared; the rest of the function will add properties to it
  const userInput = {};
  //The user is informed of the password minimum and maximum character length requirements, and then prompted to enter their desired password length; the result is saved as a property of userInput
  userInput.passwordLength = window.prompt(
    'Enter desired password length (between 8 and 128 characters):'
    );
  // If the user entered fewer than the minimum or more than the maximum number are characters, they are informed that the password can't be generated until the length requirements are met
    if(userInput.passwordLength < 8 || userInput.passwordLength > 128){
    window.alert('Password length must be between 8 and 128 characters.')
    return;
  }
    //The user is prompted for which character types they would like to include, and the results are stored as a property of userInput
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
    //The user's character choices are stored in the AllItems array as strings
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
    //If the user didn't select any character types, a message displays letting them know the password can't be generated until they do.
    if(allItems.length == 0){
      window.alert('You must select at least one character type.');
      return;
    }
    return userInput;
}


function returnRandom(input) {
  let password = '';
  //The for loop loops through indices of allItems a number of times equal to the user's chosen password length
  for (let i = 0; i < input.passwordLength; i++){
    let selectedItem = allItems[i % allItems.length];
 //the value of possibleChar loops through arrays that correspond to which character type the user picked
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
    //nextChar picks a random index number from whatever the current value of possibleChar is
    const index = Math.floor(Math.random() * possibleChars.length);
    const nextChar = possibleChars[index];
    //the password is built character by character as i increments so that all chosen character types are represented
    password = password + nextChar;   
  }
  //The final string is shuffled so that the character types do not appear in a predictable pattern
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password;
}

//This is the end of the function that is this whole page, and then it is called.
})();

