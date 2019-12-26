function getSleepHours(day){
  switch(day){
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 9;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 5;
      break;
    default:
      return 'invalid';
      break;
  }
}
const getActualSleepHours = ()=> getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours( 'wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
function getIdealSleepHours(idealHours){
  //const idealHours = 8;
  return idealHours * 7;
}
function calculateSleepDebt(){
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);
  if(actualSleepHours === idealSleepHours){
    console.log('You have the perfect amount of sleep.');
  } else if(actualSleepHours > idealSleepHours){
    console.log(`You got ${actualSleepHours - idealSleepHours} more sleep time than needed.`);
  } else {
    console.log(`You should get more ${idealSleepHours - actualSleepHours} rest hour(s)!`);
  }
}
calculateSleepDebt();
