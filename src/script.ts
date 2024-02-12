type choice = "Rock" | "Paper" | "Scissors";
let userChoice : choice;
let compChoice : choice ;
let userScore : number = 0;
let compScore : number = 0;
let stat : "Won" | "Lost" | "Tie";
const avalaibleChoice : string[] = ["Rock", "Paper" , "Scissors"];
const disc : {
    [index : string] : string
} = {
    ["Rock"] : "Scissors",
    ["Paper"] : "Rock",
    ["Scissors"] : "Paper"
};


function playerChoice(event : MouseEvent) : string
{
    let button = event.target as HTMLButtonElement;
    userChoice = button.innerHTML as choice;   
    console.log(userChoice)
    return userChoice;
}

function computersChoice(event : MouseEvent)
{
    compChoice = avalaibleChoice[Math.floor(Math.random() *3)] as choice;
        // console.log(compChoice);
    (document.getElementById("computer") as HTMLDivElement).innerHTML = "";
    (document.getElementById("computer") as HTMLDivElement).innerHTML = compChoice;  
    winner(userChoice,compChoice);

}
function winner(userChoice: string, compChoice: string)
{
    if(userChoice === compChoice)
    {
        stat = "Tie";
    }
    else if(disc[userChoice] === compChoice)
    {
        stat = "Won";
        userScore++;
    }
    else
    {
        stat = "Lost";
        compScore++;
    }
    
    (document.getElementById("stat") as HTMLDivElement).innerHTML = "";
    (document.getElementById("stat") as HTMLDivElement).innerHTML = stat;  
    (document.getElementById("userScore")! as HTMLDivElement).innerHTML = "";
    (document.getElementById("userScore")! as HTMLDivElement).innerHTML = userScore.toString();
    (document.getElementById("compScore")! as HTMLDivElement).innerHTML = "";
    (document.getElementById("compScore")! as HTMLDivElement).innerHTML = userScore.toString();
}

