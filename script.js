//we make defferent function for defferent work is call modular 
let userScore = 0;
let computerScore = 0;

//fach all element
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#com-score");

//generat computer choyas
const gencomputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock , paper , scissors
   const randIdx = Math.floor(Math.random()*3)   // if you want to range of 0 to n so     Math.random() * (n-1)
             //for remover desimal value Math.floor(Math.random() * (n-1))

    return options[randIdx];
}

//draw game
const drawGame = () => {
    // console.log("Game was draw!!");
    msg.innerText = "Game was Draw! Play again";
    msg.style.backgroundColor = "#000001";
    msg.style.color = "#F5F5F5"
};

//disided winner
const showWinner = (userWin, userChoice , computerChoice) => { 
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText= `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#06d6a0";
        msg.style.color = "#000001"
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        // console.log("You lose!")
        msg.innerText = `You Lost! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#c1121f";
        msg.style.color = "#F5F5F5"

    }
}

//game emplement  and show winner
const playGame = (userChoice) => {
        //Generate user choice
    // console.log("User Choice =", userChoice);
        //Generate computer choice  
const computerChoice = gencomputerChoice();
    // console.log("Computer Choice" , computerChoice);

    if(userChoice === computerChoice){
        //Draw Game
        drawGame();
    }
    else{
       let userWin = true;
    if(userChoice = "rock"){
        //comCho = paper , scissors
    userWin = computerChoice  === "paper" ? false :true; 
    }
    else if(userChoice = "paper"){
        //comCho = rock , scissors
    userWin = computerChoice === "scissor" ? false : true;
    }
    else{
        //rock , paper
        userWin = computerChoice == "rock" ? false : true;
    }
showWinner(userWin,userChoice,computerChoice);
    }
};

//choice fach
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was Clicked",userChoice);
        playGame(userChoice);
    });
});