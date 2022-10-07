/*----- constants -----*/
// Define the constants (audio)

/*----- state variables -----*/
// Define the required variables
// Define the board, turn/score, mistake/lose
let board;
let score;
let complete;

/*----- cached elements  -----*/
// Cache the score element for later use
// (Play again button, and score)

/*----- event listeners -----*/
// Add needed event listeners
// (One for the board that on click will see
// if the player's choice matches the computer's, and
// one that )

/*----- functions -----*/
// Define functions
// 1. Computer makes a random choice, and store it.
// 2. play back the stored pattern (with audio).
init();

function init() {
    board = [
        "green", "red", "yellow", "blue"
    ];
    score = 0;
    complete = "false";
    render();
}

function render() {
    
}