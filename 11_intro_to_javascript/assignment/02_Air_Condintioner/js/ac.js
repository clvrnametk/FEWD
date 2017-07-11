/* Variables */
var currentTemp = parseInt( prompt("What is the current temperature?"));
var desiredTemp = parseInt( prompt("What temperature would you like it to be?"));


/* Print to Console */
if  (
    currentTemp < desiredTemp
    ) {
  console.log("Turning off the A/C! It's too cold!");
} else if (
          currentTemp > desiredTemp
          ) {
  console.log("Turning on the A/C! It's boiling in here!");
} else if (
          currentTemp == desiredTemp
          ) {
  console.log("A perfect temperature. Keep the cool!");
} else if (
          isNaN(currentTemp) ||
          isNaN(desiredTemp)
          ){
  console.log("Please make sure to enter numbers only, refresh the page and try again.");
} else {
  console.log("Looks like something went wrong, refresh and try again please.");
}
