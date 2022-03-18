let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    turnNumber = 0;
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {   // we are using the click object as e so we can get the id of the clicked circle
                let move = e.target.getAttribute("id");   // store the above id into move
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }

    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];   // clear the playerMoves
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);   // push into the currentGame, go to choices key from game which contains our four 
                                                                            // values and then use the math.random to generate a random number between zero and three. 
                                                                            // We will use this as the index of our choices array and then the resulting choice is pushed
                                                                            // onto the currentGame array
    showTurns();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

// call the lightOn function with the id of one of our circles 'circ'
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");   // the class of 'light' will be addded to the appropriate circle
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");   // remove the class 'light' from the circle
    }, 400);    // after 400 miliseconds
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

function playerTurn() {
    let i = game.playerMoves.length -1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn };