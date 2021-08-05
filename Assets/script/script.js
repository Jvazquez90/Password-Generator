// Arrays of options for generated password
var uppercaseLetters = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
var lowercaseLetters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[","^", "_", "`", "{", "|", "}", "~"];

var newPassword = [];

var userChoice = "";
var lowercase;
var uppercase;
var numbers;
var specialCharacters;

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  userChoice = window.prompt("How many characters would you like your password to be?");

  if (userChoice < 8 || userChoice > 128 ) {
  alert("Password must be between 8-128 characters.");
  prompt("How many characters would you like your password to be?");
}

  else if(userChoice > 8 || userChoice < 128){
    uppercase = confirm("Would you like uppercase letters in your password?");
    lowercase = confirm("Would you like lowercase letters in your password?");
    numbers = confirm("Would you like numbers in your password?");
    specialCharacters = confirm("Would you like special characters in your password?");

  if(uppercase === true){
    (newPassword.push(uppercaseLetters));

  }

  if(lowercase === true){
    (newPassword.push(lowercaseLetters));

  }

  if(numbers === true){
    (newPassword.push(numbersArray));
  }

  if(specialCharacters === true){
    (newPassword.push(specialCharactersArray));
  }

  }


  

}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
