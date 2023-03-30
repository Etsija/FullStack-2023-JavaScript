// Number guessing game
var min = 0;
var max = 100;
var currentNumber;
var currentMin = min;
var currentMax = max;

// Generate random number between (min, max)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  function reset() {
    currentNumber = getRandomInt(min, max);
    currentMin = min;
    currentMax = max;
    updateInfo(min, max);
    updateResult("");
    let guess_input = document.getElementById("guess");
    guess_input.value = "";
}

// Update the info txt
function updateInfo(min, max) {
    console.log("min:" + min + " max:" + max);
    let resultTxt = document.getElementById("info");
    resultTxt.innerHTML = "Choose a number between " + min + " and " + max + ".";
}

// Update the guess result
function updateResult(result) {
    let infoTxt = document.getElementById("guess_result");
    infoTxt.innerHTML = result;
}

function submit() {
    let guess_input = document.getElementById("guess");
    let guess = guess_input.value;
    console.log(currentNumber);

    if (guess == "") {
        updateResult("Input is not a valid number!");
        updateInfo(currentMin, currentMax);
        return; 
    } else if (guess < currentMin || guess > currentMax) {
        updateResult("Input is out of bounds!");
        updateInfo(currentMin, currentMax);
        return;
    } else if (guess == currentNumber) {
        updateResult("YOU WON! The number was " + currentNumber + ".");
        updateInfo(0, 100);
        return;
    } else if (guess < currentNumber) {
        updateResult("The number I'm thinking of is BIGGER.");
        currentMin = guess;
        updateInfo(currentMin, currentMax);
        return;
    } else if (guess > currentNumber) {
        updateResult("The number I'm thinking of is SMALLER.");
        currentMax = guess;
        updateInfo(currentMin, currentMax);
        return;
    } 
}