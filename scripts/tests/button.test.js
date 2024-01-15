/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContetnts = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContetnts);
    document.close();
})

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    })
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
})