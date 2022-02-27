// Get references to the #generate element
 
 //lowercase, uppercase, numbers, special characters
 var special = ['!','@','#','$','%','^','&','*','+',]
 var numeric = ['0','1','2','3','4','5','6','7','8','9',]
 
 var lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',]
 
 var upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',]
 
// an object of user choices that we will get from user
var userChoices = {
    length: 8,
    lowerCase: false,
    upperCase: false,
    numeric: false,
    special: false
}
 
  // an function that gets user choices and saves them to our object
function getChoices() {
    // user choices
    userChoices.length = parseInt(prompt("how many characters"))
     
    if (!(userChoices.length >= 8 && userChoices.length <= 128)) {
        alert('chose an incorrect value, setting to 8 characters')
        return getChoices()
   
    }
    userChoices.lowerCase = confirm("would you like lower")
    userChoices.upperCase = confirm("would you like upper")
    userChoices.numeric = confirm("would you like numeric")
    userChoices.special = confirm("would you like special")
}
   
   
   
   getChoices()
   
 