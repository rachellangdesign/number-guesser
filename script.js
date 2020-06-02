let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const getAbsoluteDistance = (num1, num2) => Math.abs(num1-num2);

const compareGuesses = (humanGuess, computerGuess, target) => {
  const humanDifference = getAbsoluteDistance(target, humanGuess);
  const computerDifference = getAbsoluteDistance(target, computerGuess);
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
};
