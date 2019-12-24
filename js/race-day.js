let raceNumber = Math.floor(Math.random() * 1000);
let early = ; //boolean
let age = ; //integer

if(age>=18 && early){
  raceNumber += 1000;
}

if(age > 18 && early){
  console.log(`You will race at 9:30 am. Your number is ${raceNumber}`);
} else if(age>18 && !early){
  console.log(`You will raace at 11:00 am. Your number is ${raceNumber}`);
} else if(age=18){
  console.log('See the registration desk.')
} else {
  console.log(`You will raace at 12:30 am. Your number is ${raceNumber}`);
}
