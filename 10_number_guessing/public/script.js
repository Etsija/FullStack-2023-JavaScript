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
  
// Update the info txt
function updateInfo(min, max) {
    console.log("min:" + min + " max:" + max);
    let resultTxt = document.getElementById("result");
    resultTxt.innerHTML = "Choose a number between " + min + " and " + max + ".";
}

function reset() {
    currentNumber = getRandomInt(min, max);
    updateInfo(min, max);
    console.log(currentNumber);
}

function submit() {
    let resultTxt = document.getElementById("result");
    let guess_input = document.getElementById("guess");
    let guess = guess_input.value;

    if (guess == "") {
        resultTxt.innerHTML = "Not a valid number";
        return; 
    } else if (guess < currentMin || guess > currentMax) {
        resultTxt.innerHTML = "Valid area = [" + currentMin + ", " + currentMax + "]";
        return;
    } else if (guess == currentNumber) {
        resultTxt.innerHTML = "YOU WON! The number was " + currentNumber;
        return;
    } else if (guess < currentNumber) {
        currentMin = guess;
        updateInfo(currentMin, currentMax);
        return;
    } else if (guess > currentNumber) {
        currentMax = guess;
        updateInfo(currentMin, currentMax);
        return;
    } 
    
    console.log("valid: " + guess);
}