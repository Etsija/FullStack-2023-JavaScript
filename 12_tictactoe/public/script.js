// Tic-Tac-Toe game
window.onload = function() {

    const PLAYER_X_CLASS = "x";
    const PLAYER_O_CLASS = "circle";
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // The board itself
    const boardElement = document.getElementById("board");

    // All cell elements of the board
    //const cellElements = document.getElementsByClassName("cell");
    const cellElements = document.querySelectorAll("[data-cell]");

    // Winning message element
    const winningMessageElement = document.getElementById("winningMessage");

    // Restart button
    const restartButton = document.getElementById("restartButton");

    // Winning message
    const winningMessageTextElement = document.getElementById("winningMessageText");

    // Initialise turns
    let isPlayer_O_Turn = false;

    startGame();
    restartButton.addEventListener("click", startGame);

    function startGame() {
        isPlayer_O_Turn = false;
        cellElements.forEach(cell => {
            cell.classList.remove(PLAYER_X_CLASS);
            cell.classList.remove(PLAYER_O_CLASS);
            cell.removeEventListener("click", handleCellClick);
            cell.addEventListener("click", handleCellClick, { once: true });
        })
        setBoardHoverClass();
        winningMessageElement.classList.remove("show");
    }

    function handleCellClick(e) {
        const cell = e.target;
        const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS;
        placeMark(cell, currentClass);
        if (checkWin(currentClass)) {
            endGame(false);
        } else if (isDraw()) {
            endGame(true);
        } else {
            swapTurns();
            setBoardHoverClass();
        }
    }

    function setBoardHoverClass() {
        boardElement.classList.remove(PLAYER_X_CLASS);
        boardElement.classList.remove(PLAYER_O_CLASS);
        if (isPlayer_O_Turn) {
            boardElement.classList.add(PLAYER_O_CLASS);
        } else {
            boardElement.classList.add(PLAYER_X_CLASS);
        }
    }

    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass);
            })
        })
    }

    function endGame(draw) {
        if (draw) {
            winningMessageTextElement.innerText = "It's a draw!";
        } else {
            if (isPlayer_O_Turn) {
                winningMessageTextElement.innerText = "Player O wins!";
            } else {
                winningMessageTextElement.innerText = "Player X wins!";
            }
        }
        winningMessageElement.classList.add("show");
    }

    function isDraw() {
        return [...cellElements].every(cell => {
            return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS);
        })
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }
    
    function swapTurns() {
        isPlayer_O_Turn = !isPlayer_O_Turn;
    }
}