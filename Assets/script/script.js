// Array of options for generated password
var uppercaseLetters = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
var lowercaseLetters = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharactersArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "[","^", "_", "`", "{", "|", "}", "~"];

var passwordValues = [];
var passwordLength = 0;
var newPassword = '';

var lowercase;
var uppercase;
var numbers;
var specialCharacters;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

document.getElementById("password").value = "Your Secure Password";


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

// Prompts
function generatePassword () {
    passwordLength = parseInt(window.prompt("Please enter how many characters you would like your password to be? Please pick a numerical value between 8-128"));

    if (passwordLength < 8 || passwordLength > 128 || (isNaN(passwordLength))) {
        alert("Must enter a numerical value between 8-128. Please try again.");
        
    } else if (passwordLength => 8 && passwordLength <= 128) {
        uppercase = confirm("Would you like uppercase letters in your password?");
        lowercase = confirm("Would you like lowercase letters in your password?");
        numbers = confirm("Would you like numbers in your password?");
        specialCharacters = confirm("Would you like special characters in your password?");

        if (!uppercase && !lowercase && !numbers && !specialCharacters) {
            alert("You must chose atleast one of the criteria. Please try again.");
        }

        if (uppercase === true) {
            passwordValues.push(uppercaseLetters);
        }

        if (lowercase === true) {
            passwordValues.push(lowercaseLetters);
        }

        if (numbers === true) {
            passwordValues.push(numbersArray);
        }

        if (specialCharacters === true) {
            passwordValues.push(specialCharactersArray);
        }

        console.log('password values -> ', passwordValues);
    }

  
    // loop through  to add new values to newPassword
    for (var i = 0; i < passwordLength; i++) { // pick some value from passwordValues

        var libraryIndex = Math.floor(Math.random() * passwordValues.length);
        var randomValueIndex = Math.floor(Math.random() * passwordValues[libraryIndex].length);

        newPassword += passwordValues[libraryIndex][randomValueIndex];
    }
        console.log('newPassword->', newPassword);

        return newPassword;       
}






