/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

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