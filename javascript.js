const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore1 = document.querySelector("#user-score");
const compScore1 = document.querySelector("#comp-score");
const resetbtn = document.querySelector("#reset");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  const option = ["stone", "paper", "scissor"];
  const idx = Math.floor(Math.random() * 3);
  return option[idx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScore1.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScore1.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = (userChoice) => {
  msg.innerText = `Game Draw You and Computer choose ${userChoice}`;
  msg.style.backgroundColor = "black";
  msg.style.color = "white";
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame(userChoice);
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

let reset = () => {
  userScore = 0;
  userScore1.innerText = userScore;
  compScore = 0;
  compScore1.innerText = compScore;

  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#534b52";
};

resetbtn.addEventListener("click", reset);
