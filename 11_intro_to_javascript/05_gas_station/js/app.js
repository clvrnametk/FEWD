var myGas = parseInt( prompt("From 1-10, how much gas in the tank?") );
var gasPrice = parseInt( prompt("What is the gas price?") );

if (myGas < 10 && gasPrice < 4) {
  console.log("Stop here for gas!");
} else {
  console.log("Keep drving!!");
}
