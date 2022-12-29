
var passwordLength = 8;
var choiceArray=[];

var charactersArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate")

function generatePassword() {

}

function passwordPrompts() {
  passwordLength = parseInt(prompt("How many characters would you like your password to be? It must be between 8 and 128.");

  if (isNaN(passwordLength) || passwordLength <8 || passwordLength > 128)
    alert ("Password length must be entered in digit form and must be a minimum of 8 characters or maximum of 128 characters")
    return false;
}

  if (confirm("Would you like to use special characters in your password?")) {
  choiceArray = choiceArray.concat(charactersArray);
  }

  if (confirm("Would you like to use lowercase letters in your password?")) {
      choiceArray = choiceArray.concat(lowercaseArray);
  }

  if (confirm("Would you like to use uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }

  if (confirm("Would you like to use numbers in your password?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }






generateBtn.addEventListener("click",generatePassword);

// Get references to the #generate elemen

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
