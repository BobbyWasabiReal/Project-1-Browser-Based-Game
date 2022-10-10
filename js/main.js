/*----- constants -----*/
// Define the constants (audio)
const AUDIO = new Audio();
const BOARD = {
    0: "green",
    1: "red",
    2: "yellow",
    3: "blue"
};

/*----- state variables -----*/
// Define the required variables
// Define the board, turn/score, mistake/lose
let pSequence;
let sequence;
let score;
let loss;

/*----- cached elements  -----*/
// Cache the elements for later use
// (Play again button, and score)
const playAgainBtn = document.getElementById('play-again');
const scoreEl = document.getElementById("score");

/*----- event listeners -----*/
// Add needed event listeners
// (One for the board that on click will see
// if the player's choice matches the computer's and one for the play agin button)


/*----- functions -----*/
// Define functions
// 1. Computer makes a random choice, and store it.
// 2. play back the stored pattern (with audio).
init();

// Computer will generate a random num 0 - 3
function comChoice() {
    if (pSequence === sequence) {
        return Math.floor(Math.random() * BOARD.length);
        console.log("double check");
        console.log(comChoice);
    }
}

function init() {
    sequence = [];
    pSequence = [];
    score = 0;
    loss = false;
    render();
}

function renderLoss() {
    if (pSequence !== sequence) {
        loss = true;
    } else {
        loss = false;
    }
    // Button visibility
    playAgainBtn.style.visibility = loss ? "hidden" : "visible";
}

function renderScore() {
    // If choice correct add to the score
    if (pSequence === sequence) {
        return score++;
    } else {
        console.log(":)")
    }
    render();
}

// Replay the sequence
function renderSequence() {
    console.log(":(");
}

function render() {
    renderLoss();
    // renderScore();
    renderSequence();
}