/*----- constants -----*/
// Define the constants (audio)
const AUDIO = {
    green: new Audio(),
    red: new Audio(),
    yellow: new Audio(),
    blue: new Audio()
};

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
document.getElementById("green").addEventListener("click", handleChoice);
document.getElementById("red").addEventListener("click", handleChoice);
document.getElementById("yellow").addEventListener("click", handleChoice);
document.getElementById("blue").addEventListener("click", handleChoice);

/*----- functions -----*/
// Define functions
// 1. Computer makes a random choice, and store it.
// 2. play back the stored pattern (with audio).
init();

function init() {
    isPlayingSequence = false;
    sequence = ["red", "green", "blue", "blue"];
    pSequence = ["red", "green", "blue", "blue"];
    score = 0;
    loss = false;
    render();
}

function handleChoice(evt) {
    const board = Object.values(BOARD);
    if (equals(pSequence, sequence) === true && loss === false && isPlayingSequence === false) {
        // pSequence.push(":(");
        // console.log(pSequence);
    }
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
    if (equals(pSequence, sequence) === false) {
        loss = true;
    } else {
        loss = false;
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
    if (equals(pSequence, sequence) === true && isPlayingSequence === false) {
        comChoice();

        let i = 0;
        
        function timedLoop() {
            setTimeout(function () {
                colorFlash();
                i++;
                if(i < sequence.length) {
                    timedLoop();
                }
            }, 640);
        }
        
        timedLoop();

        function colorFlash() {
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
        isPlayingSequence = false;
    } else {
        isPlayingSequence = false;
    }
};

function greenFlash() {
    const greenBtn = document.getElementById("green");
    greenBtn.style.borderColor = "#18a830";
    greenBtn.style.backgroundColor = "#1cd440";
    setTimeout(() => {
        greenBtn.style.borderColor = "#1cd440";
        greenBtn.style.backgroundColor = "#18a830";
    }, 550);
}

function redFlash() {
    const redBtn = document.getElementById("red");
    redBtn.style.backgroundColor = "#c74b40";
    redBtn.style.borderColor = "#993026";
    setTimeout(() => {
        redBtn.style.backgroundColor = "#993026";
        redBtn.style.borderColor = "#c74b40";
    }, 550);
}

function yellowFlash() {
    const yellowBtn = document.getElementById("yellow");
    yellowBtn.style.backgroundColor = "#fcfa81";
    yellowBtn.style.borderColor = "#d6d300";
    setTimeout(() => {
        yellowBtn.style.backgroundColor = "#d6d300";
        yellowBtn.style.borderColor = "#fcfa81";
    }, 550);
}

function blueFlash() {
    const blueBtn = document.getElementById("blue");
    blueBtn.style.backgroundColor = "#477bd6";
    blueBtn.style.borderColor = "#113d8a";
    setTimeout(() => {
        blueBtn.style.backgroundColor = "#113d8a";
        blueBtn.style.borderColor = "#477bd6";
    }, 550);
}

function render() {
    renderLoss();
    renderScore();
    renderSequence();
}