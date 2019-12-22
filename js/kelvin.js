//forecast in kelvin
const kelvin = 0;
//forecast in celsius
var celsius = kelvin - 273;
//forecast in fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//fahrenheit forecast in whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature in Newton's scale has the value of ${newton}`);
