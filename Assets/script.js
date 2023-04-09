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

const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');
let specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');
specialChar.push("'");

// program to get a random item from an array

function getRandomItem(specialChar) {

  // get random index value
  const specialCharRandomIndex = Math.floor(Math.random() * specialChar.length);

  // get random item
  const specialCharItems = specialChar[specialCharRandomIndex];

//somehow multiply specialChar by the passwordLength variable

  return item;
 
}



function generatePassword() {
  let passwordLength = window.prompt(
    'Enter desired password length (number of characters):'
    );
  console.log(passwordLength * 3);

  if (confirm("Include special characters? (OK = yes, cancel = no)") == true) {
    // Function to fetch the random number of indices indicated
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  };
  return 'hey';
}

})();
