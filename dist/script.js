"use strict";
let userChoice;
let compChoice;
let userScore = 0;
let compScore = 0;
let stat;
const avalaibleChoice = ["Rock", "Paper", "Scissors"];
const disc = {
    ["Rock"]: "Scissors",
    ["Paper"]: "Rock",
    ["Scissors"]: "Paper"
};
function playerChoice(event) {
    let button = event.target;
    userChoice = button.innerHTML;
    console.log(userChoice);
    return userChoice;
}
function computersChoice(event) {
    compChoice = avalaibleChoice[Math.floor(Math.random() * 3)];
    // console.log(compChoice);
    document.getElementById("computer").innerHTML = "";
    document.getElementById("computer").innerHTML = compChoice;
    winner(userChoice, compChoice);
}
function winner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        stat = "Tie";
    }
    else if (disc[userChoice] === compChoice) {
        stat = "Won";
        userScore++;
    }
    else {
        stat = "Lost";
        compScore++;
    }
    document.getElementById("stat").innerHTML = "";
    document.getElementById("stat").innerHTML = stat;
    document.getElementById("userScore").innerHTML = "";
    document.getElementById("userScore").innerHTML = userScore.toString();
    document.getElementById("compScore").innerHTML = "";
    document.getElementById("compScore").innerHTML = userScore.toString();
}
