const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'egg'){
    return userInput;
  } else {
    return 'Please, insert a valid option.';
  }
};
  
function getComputerChoice(){
  switch(Math.floor(Math.random() *3)){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    default:
      return 'scissors';
      break;
  }
  /*
  var num = Math.floor(Math.random() *3);
  if(num === 0){
    return 'rock';
  } else if(num === 1){
    return 'paper';
  } else {
    return 'scissors';
  }
  */
}
  
function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'The game was a tie!';
  } else if(userChoice === 'egg'){
    return 'You won!';
  } else if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won.'
    } else {
      return 'You won!';
    }
  } else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won.';
    } else {
      return 'You won!';
    }
  } else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won.';
    } else {
      return 'You won!';
    }
  } else {
    return 'Please, insert a valid option.';
  }
}

function playGame(){
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: '+userChoice);
  console.log('The computer threw: '+computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
