// Assignment code here

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
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword();
}

// Add event listener to generate button
generateEl.addEventListener("click", (event) => {
  writePassword();
});

function generatePassword() {
  let Password = "";
  var Lowercase = false;
  var Uppercase = false;
  var Number = false;
  var Symbol = false;

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
    alert("You need to provide a valid answer! Please try again.");
    generatePassword();
  }
  if (parseInt(promptlengthtext) >= 8 && parseInt(promptlengthtext) <= 128) {
    Lowercase = confirm("Do you want a lowercase letter?");
    Uppercase = confirm("Do you want a uppercase letter?");
    Number = confirm("Do you want a number?");
    Symbol = confirm("Do you want a symbol?");
  }
  while (
    Lowercase != true &&
    Uppercase != true &&
    Number != true &&
    Symbol != true
  ) {
    console.log(Lowercase, Uppercase, Number, Symbol);
    alert("Must pick at least one of the values to generate a password!");
    Lowercase = confirm("Do you want a lowercase letter?");
    Uppercase = confirm("Do you want a uppercase letter?");
    Number = confirm("Do you want a number?");
    Symbol = confirm("Do you want a symbol?");
  }

  const typesArr = [
    {
      lower: Lowercase,
    },
    { upper: Uppercase },
    { symbol: Symbol },
    {
      number: Number,
    },
  ].filter((item) => Object.values(item)[0]);

  for (let i = 0; i < promptlengthtext; i++) {
    var randomIndex = Math.floor(Math.random() * typesArr.length);
    const funcName = Object.keys(typesArr[randomIndex]);
    Password += randomFunc[funcName]();
  }
  console.log(Password);
  return Password;
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
