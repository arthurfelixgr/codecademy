const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'pedra' || userInput === 'papel' || userInput === 'tesoura' || userInput === 'ovo'){
    return userInput;
  } else {
    return 'objeto inválido.';
  }
};
  
function getComputerChoice(){
  switch(Math.floor(Math.random() *3)){
    case 0:
      return 'pedra';
      break;
    case 1:
      return 'papel';
      break;
    default:
      return 'tesoura';
      break;
  }
  /*
  var num = Math.floor(Math.random() *3);
  if(num === 0){
    return 'pedra';
  } else if(num === 1){
    return 'papel';
  } else {
    return 'tesoura';
  }
  */
}
  
function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'Empate!';
  } else if(userChoice === 'ovo'){
    return 'Você venceu!';
  } else if (userChoice === 'pedra'){
    if(computerChoice === 'papel'){
      return 'O computador venceu.'
    } else {
      return 'Você venceu!';
    }
  } else if(userChoice === 'papel'){
    if(computerChoice === 'tesoura'){
      return 'O computador venceu.';
    } else {
      return 'Você venceu!';
    }
  } else if(userChoice === 'tesoura'){
    if(computerChoice === 'pedra'){
      return 'O computador venceu.';
    } else {
      return 'Você venceu!';
    }
  } else {
    return 'Por favor, insira um opção válida.';
  }
}

function playGame(){
  const userChoice = getUserChoice('');
  const computerChoice = getComputerChoice();
  console.log('Você escolheu: '+userChoice);
  console.log('O computador escolheu: '+computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
