// Assignment code here
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
}
if (promptlengthtext >= 8 && promptlengthtext <= 128) {
  var Lowercase = confirm("Do you want a lowercase letter?");
  var Uppercase = confirm("Do you want a uppercase letter?");
  var Number = confirm("Do you want a number?");
  var Symbol = confirm("Do you want a symbol?");
}
while (Lowercase != true && Uppercase != true && Number != true && Symbol) {
  window.prompt("Must pick at least one of the values to generate a password!");
  Lowercase = confirm("Do you want a lowercase letter?");
  Uppercase = confirm("Do you want a uppercase letter?");
  Number = confirm("Do you want a number?");
  Symbol = confirm("Do you want a symbol?");
}

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
  const hasLower = Lowercase.true;
  const hasUpper = Uppercase.true;
  const hasNumber = Number.true;
  const hasSymbol = Symbol.true;
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = "";
  const typesCounted = lower + upper + number + symbol;
  const typesArr = [
    {
      lower,
    },
    { upper },
    { symbol },
    {
      number,
    },
  ].filter((item) => Object.values(item)[0]);
}
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
