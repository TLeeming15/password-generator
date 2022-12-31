// These are emtpy arrays to store data in later
var passwordLength = [];
var choiceArray=[];
// These are arrays separated into logical categories of characters.Each array holds all the possible characters for each category. These are linked with the prompts that the user will interact with to customize their unique password.
var charactersArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 
var generateBtn = document.querySelector("#generate")
// When the user clicks the button the writePassword function will be called
generateBtn.addEventListener("click",writePassword);
// These are the prompts that must be returend true in order for the writePassword function to run.
function passwordPrompts() {

// These are all the prompts that the user will interact with to customize their password. The first is a string and the rest are Boolean.
  passwordLength = parseInt(prompt("How many characters would you like your password to be? It must be between 8 and 128."));
// If the user types anything that is Not a Number (NaN then it will return false and addtional prompt will be sent to the user to start over.)
  if (isNaN(passwordLength) || passwordLength < 7 || passwordLength > 128){
    alert ("Password length must be entered in digit form and must be a minimum of 8 characters or maximum of 128 characters")
    return false;
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

  if (confirm("Would you like to use special characters in your password?")) {
    choiceArray = choiceArray.concat(charactersArray);
    }

  return true;
}

// Writes password to the #password input. Also ensures that this only happens when the prompts are returned true.
function writePassword() {
  var properPrompts = passwordPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // This calls the generate password function.
  if (properPrompts){
    var password = generatePassword();
    passwordText.value = password;
  }
}
// This function actually generates the password using the data stored in the arrays that are chosen throught he user prompts.
function generatePassword() {
var password = "";
  for(var i = 0; i < passwordLength; i++){
  var randomCharacter = Math.floor(Math.random() * choiceArray.length);
  password = password + choiceArray[randomCharacter];
  }
  return password;
}


