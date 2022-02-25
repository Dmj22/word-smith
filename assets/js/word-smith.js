
   
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// an object of user choices that we will get from user


// Write password to the #password input
function genPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
      document.querySelector("password").value = password;
}

function copyPassword() {
var copyText = document.querySelector("password");
copyText.select();
document.execCommand("copy");  
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);