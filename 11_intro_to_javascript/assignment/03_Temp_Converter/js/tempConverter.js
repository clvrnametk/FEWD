/* Variables */
var tempNum = parseInt( prompt("What temperature do you want convert?" + "\n" + "Enter only numbers"))
var tempConvert = prompt("What temperature scale would you like to convert that temperature to? Enter \"F to C\" or \"C to F\"")


/* Print to Console */
if  (
  tempConvert == "C to F"
    ) {
  console.log(tempNum + "\xB0C converts to " + (((tempNum * 9) / 5) + 32) + "\xB0F");
} else if (
          tempConvert == "F to C"
          ) {
  console.log(tempNum + "\xB0F converts to " + (((tempNum - 32) * 5) / 9) + "\xB0C");
} else if (
          isNaN(tempNum) &&
          tempConvert != "F to C" ||
          tempConvert != "C to F"
          ){
  console.log("Looks like you didn't enter a number for the temperature" + "\n" + "You also didn't enter \"F to C\" or \"C to F\" for conversion." + "\n" + "Please refresh and try again.");
} else if (
          tempConvert != "F to C" ||
          tempConvert != "C to F"
          ){
  console.log("Please make sure to enter either \"F to C\" or \"C to F\"" + "\n" + "Please refresh the page and try again.");
} else if (
          isNaN(tempNum)
          ){
  console.log("Please to enter a number for the temperature you are looking to convert" + "\n" + "Please refresh the page and try again.");
}
