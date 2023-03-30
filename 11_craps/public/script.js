// Craps game
var point = 0;

// Generate random number between (min, max)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function reset() {
    point = 0;
    updateResult(0);
    updateGameStatus("Game starts");
}

function updateResult(result) {
    let resultTxt = document.getElementById("result");
    if (!result) {
        resultTxt.innerHTML = "Result of the roll";
        return;
    }
    resultTxt.innerHTML = "You rolled " + result;
}

function updateGameStatus(status) {
    let statusTxt = document.getElementById("game_status");
    statusTxt.innerHTML = status;
}

function roll() {
    let dice1 = getRandomInt(1,6);
    let dice2 = getRandomInt(1,6);
    let result = dice1 + dice2;

    console.log(dice1, dice2, result);
    updateResult(result);

    // First throw
    if (!point) {
        switch (result) {
            case 7:
            case 11:
                updateGameStatus("YOU WON!");
                break;
            case 2:
            case 3:
            case 12:
                updateGameStatus("YOU LOST!");
                break;
            default:
                point = result;
                updateGameStatus("Rolling for " + point + " now.");
        }
    // Subsequential throws
    } else {
        switch (result) {
            case point:
                updateGameStatus("YOU WON!");
                break;
            case 7:
                updateGameStatus("YOU LOST!");
                break;
            default:
                updateGameStatus("Rolling for " + point + " now. The excitement continues...");
        }
    }
}