let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];   // clear the playerMoves
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);   // push into the currentGame, go to choices key from game which contains our four 
                                                                            // values and then use the math.random to generate a random number between zero and three. 
                                                                            // We will use this as the index of our choices array and then the resulting choice is pushed
                                                                            // onto the currentGame array
    // showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}


module.exports = { game, newGame, showScore, addTurn };