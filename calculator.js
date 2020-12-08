"use strict";

const div =document.createElement('divCalculator');
divCalculator.classList.add('calculator')
const div =document.createElement('divScreen');
divScreen.classList.add('screen')
const div =document.createElement('divKey');
divKey.classList.add('key')

function createButton(text) {
    const button = document.createElement("button");
    link.textContent = text;
    key.append(button);
}

createButton("+");
createButton("-");
createButton("*");
createButton("/");
createButton("7");
createButton("8");
createButton("9");
createButton("4");
createButton("5");
createButton("6");
createButton("1");
createButton("2");
createButton("3");
createButton("0");
createButton(".");
createButton("AC");
createButton("=");

document.body.append(div)