/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn } = require("../game");

const { hasUncaughtExceptionCaptureCallback } = require("process");

beforeAll(() => {
    let fs = require("fs");  // install the fs library
    let fileContents = fs.readFileSync("index.html", "utf-8");  // read the file index.html
    document.open();  // open the document
    document.write(fileContents);  // write the fileContents to it
    document.close();  // close the document
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);   // test first if score key exists then create key in game.js in game object
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);   // test first if currentGame key exists then create key in game.js in game object
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);   // test first if playerMoves key exists then create key in game.js in game object
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);   // test first if choices key exists then create key in game.js in game object
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);  // game.choices we pick the choices key from the game object
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {     // set up the game state with fake values and see if newGame function resets them
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";   // will set the score on the DOM to 42
        newGame();
    });
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should be one move in the computer's game array", () => {   // new test to implement the addTurn function
        expect(game.currentGame.length).toBe(1);       
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});