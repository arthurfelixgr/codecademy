let myAge = 23; //my actual age
let earlyYears = 2; //early years in real value
earlyYears = earlyYears * 10.5; //early years in dog point of view
let laterYears = myAge - 2; //latest years, on that the dog get other rythm of maturation, lowest;
laterYears *= 4; //latest years in dog point of view
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears; //my age in dog point of view;
let myName = 'John'.toLowerCase(); //my name in lower case
console.log(`My name is ${myName}. I am ${myAge} years old in human years, wich is ${myAgeInDogYears} years old in dog years.`); //prints to console my actual age and my age in dog point of view
