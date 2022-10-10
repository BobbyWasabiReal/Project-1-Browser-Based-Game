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

function init() {
    isPlayingSequence = false;
    sequence = [];
    pSequence = [];
    score = 0;
    loss = false;
    render();
}

function handleChoice()  {
    
}

function compareSequnce() {
    
}

// Computer will generate a random color,
// and push it to the sequence array
function comChoice() {
    const board = Object.values(BOARD);
    const rnd = Math.floor(Math.random() * board.length);
    sequence.push(board[rnd]);
    console.log(sequence);
}
comChoice();

function renderLoss() {
    if (equals(pSequence, sequence) === true) {
        loss = true;
    } else {
        loss = false;
    }
    // Button visibility
    playAgainBtn.style.visibility = loss ? "hidden" : "visible";
}

function renderScore() {
    // If choice correct add to the score
    if (equals(pSequence, sequence) === true) {
        score++;
        scoreEl.innerText = score;
    } else {
        console.log(":(");
    }
}

// Replay the sequence
function renderSequence() {
    console.log(":I");
}

function render() {
    renderLoss();
    renderScore();
    renderSequence();
}