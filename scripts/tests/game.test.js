/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn, lightsOn } = require("../game");

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

// test to see if gameplay works correctly including lights on and adding turn
describe("gameplay works correctly", () => {
    // beforeAll runs before all tests, beforeEach runs before each test is run
    beforeEach( () => {   
        game.score = 0;   // we will reset the state each time
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();   //add a new turn to our currentGame array
    });
    // afterEach to reset after each test
    afterEach( () => {   // reset the state after each test
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    // with beforeEach we should have one element in currectGame array and we will be testing if there are 2 elements in the array
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);   // the elements should be 2 so we are checking the length of te array
    });
    // want to check if the correct class has been added to our button to light it up
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);   // get the first element from currentGame array (at least one in ir) and assign it to button.
        lightsOn(game.currentGame[0]);  // call lights on function with the same ID
        expect(button.classList).toContain("light");   // the test should fail since we have yet to implement the lightOn fuction
    });
});