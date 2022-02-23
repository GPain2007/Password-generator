// Assignment code here

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower);

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper);

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber);

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}?><|}{";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomSymbol);

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Get references to the #generate element
var generateEl = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateEl.addEventListener("click", (event) => {
  generatePassword();
});

function generatePassword() {
  var promptlengthtext = window.prompt(
    "Password length must be between 8-128 numbers"
  );
  if (
    promptlengthtext === "" ||
    promptlengthtext === null ||
    parseInt(promptlengthtext) < 8 ||
    parseInt(promptlengthtext) > 128 ||
    isNaN(promptlengthtext)
  ) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  if (promptlengthtext >= 8 && promptlengthtext <= 128) {
    var Lowercase = confirm("Do you want a lowercase letter?");
    var Uppercase = confirm("Do you want a uppercase letter?");
    var Number = confirm("Do you want a number?");
    var Symbol = confirm("Do you want a symbol?");
  }

  var length = parseInt(promptlengthtext);
  var textPositon = 0;
  const generatedtext = [];
  while (textPositon < length) {
    generatedtext[textPositon] = getRandomLower();
    console.log(generatedtext[textPositon]);
    textPositon = textPositon + 1;
  }
}
