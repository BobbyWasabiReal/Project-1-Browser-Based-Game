/*----- constants -----*/
// Define the constants (audio)
const AUDIO = new Audio();
const BOARD = {
    0: "green",
    1: "red",
    2: "yellow",
    3: "blue"
};
const equals = (pSequence, sequence) =>
  pSequence.length === sequence.length &&
  pSequence.every((v, i) => v === sequence[i]);

  
/*----- state variables -----*/
// Define the required variables
// Define the board, turn/score, mistake/lose
let isPlayingSequence;
let pSequence;
let sequence;
let score;
let loss;

/*----- cached elements  -----*/
// Cache the elements for later use
// (Play again button, and score)
const playAgainBtn = document.getElementById("play-again");
const scoreEl = document.getElementById("score");

/*----- event listeners -----*/
// Add needed event listeners
// (One for the board that on click will see
// if the player's choice matches the computer's and one for the play agin button)
playAgainBtn.addEventListener("click", init);

/*----- functions -----*/
// Define functions
// 1. Computer makes a random choice, and store it.
// 2. play back the stored pattern (with audio).
init();

function init() {
    isPlayingSequence = false;
    sequence = ["red", "green", "blue"];
    pSequence = ["red", "green", "blue"];
    score = 0;
    loss = false;
    render();
}

function handleChoice(evt)  {
    
}

function compareSequnce() {

    score++;
}

// Computer will generate a random color,
// and push it to the sequence array
function comChoice() {
    const board = Object.values(BOARD);
    const rnd = Math.floor(Math.random() * board.length);
    sequence.push(board[rnd]);
    console.log(sequence);
}

function renderLoss() {
    if (equals(pSequence, sequence) === true) {
        loss = false;
    } else {
        loss = true;
    }
    // Button visibility
    playAgainBtn.style.visibility = loss ? "visible" : "hidden";
}

function renderScore() {
    // If choice correct add to the score
    if (equals(pSequence, sequence) === true) {
        scoreEl.innerText = `Your Score: ${score}`;
    } else {
        scoreEl.innerText = `You lose. Your score was: ${score}`;
    }
}

// Replay the sequence
function renderSequence() {
    if (equals(pSequence, sequence) === true) {
        // comChoice();
        isPlayingSequence = true;
        for (let i = 0; i < sequence.length; i++) {
            if (sequence[i] === "green") {
                greenFlash();
            } else if (sequence[i] === "red") {
                redFlash();
            } else if (sequence[i] === "yellow") {
                yellowFlash();
            } else if (sequence[i] === "blue") {
                blueFlash();
            }
        };
    } else {
        isPlayingSequence = false;
    }
};

function greenFlash() {
    const greenBtn = document.getElementById("green");
    setTimeout(() => {
        greenBtn.style.borderColor = "#18a830";
        greenBtn.style.backgroundColor = "#1cd440";
    }, 300);
    setTimeout(() => {
        greenBtn.style.borderColor = "#1cd440";
        greenBtn.style.backgroundColor = "#18a830";
    }, 500);
}

function redFlash() {
    const redBtn = document.getElementById("red");
    setTimeout(() => {
        redBtn.style.backgroundColor = "#c74b40";
        redBtn.style.borderColor = "#993026";
    }, 300);
    setTimeout(() => {
        redBtn.style.backgroundColor = "#993026";
        redBtn.style.borderColor = "#c74b40";
    }, 500);
}

function yellowFlash() {
    const yellowBtn = document.getElementById("yellow");
    setTimeout(() => {
        yellowBtn.style.backgroundColor = "#fcfa81";
        yellowBtn.style.borderColor = "#d6d300";
    }, 300);
    setTimeout(() => {
        yellowBtn.style.backgroundColor = "#d6d300";
        yellowBtn.style.borderColor = "#fcfa81";
    }, 500);
}

function blueFlash() {
    const blueBtn = document.getElementById("blue");
    setTimeout(() => {
        blueBtn.style.backgroundColor = "#477bd6";
        blueBtn.style.borderColor = "#113d8a";
    }, 300);
    setTimeout(() => {
        blueBtn.style.backgroundColor = "#113d8a";
        blueBtn.style.borderColor = "#477bd6";
    }, 500);
}

function render() {
    renderLoss();
    renderScore();
    renderSequence();
}