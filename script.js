// Assignment code here

function generatePassword() {
  //strings of possible characters for password
  var possible_chars = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    special: "!@#$%^&*()<>?{}/~_-.[];:"
  }
  // chosen characters and password are to be determined
  var chosen_chars = "";
  var password = "";

  /*learned about prompt alerts from following source:
  https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  
  prompts for user input to set length of password (total_chars) between 8 - 128 characters
  */
  var total_chars = Number(window.prompt("Choose password length between 8 - 128 characters"));

  while (isNaN(total_chars) || total_chars < 8 || total_chars > 128) {
    total_chars = Number(window.prompt("Incorrect value, please enter a number between 8 - 128"));
  };
  
  console.log("total number of characters chosen is", + total_chars);

  /*learned about confirm alert from following source:
  https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
  
  alerts user to select what characters (chosen_chars) they want to include 
  */
  if (confirm("Do you want to include lowercase letters?") == true) {
    chosen_chars = chosen_chars.concat(possible_chars.lowercase);
  };

  if (confirm("Do you want to include uppercase letters?") == true) {
    chosen_chars = chosen_chars.concat(possible_chars.uppercase);
  };

  if (confirm("Do you want to include numbers?") == true) {
    chosen_chars = chosen_chars.concat(possible_chars.numbers);
  };

  if (confirm("Do you want to use special characters?") == true) {
    chosen_chars = chosen_chars.concat(possible_chars.special);
  };

  if (chosen_chars === "") {
    alert("You must choose at least one character type, please try again.")
  };

  console.log("possible characters chosen are", chosen_chars);
  console.log("amount of possible characters is", chosen_chars.length);

  /* Was really stuck on how to generate a random loop, so I could get a random combo of characters from
  "chosen_chars" that was the length of "total_chars", found this magic recipe online
  and added a couple of my own "ingredients", source:
  https://www.slingacademy.com/article/create-javascript-array-of-random-elements-with-given-length/
  */

  for (var i = 0; i < total_chars; i++) {
    password += chosen_chars.charAt(Math.floor(Math.random() * chosen_chars.length));
  }
  return password;
};

//Starter Code:
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
