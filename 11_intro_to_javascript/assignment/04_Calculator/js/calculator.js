/* Variables */
var readyStart = prompt("You will be asked to do the following:" + "\n" + "\n" + "1. Enter a number" + "\n" + "2. Enter a math operation"  + "\n" + "3. Enter the second number." + "\n"  + "\n" + "Type \"OK\" when you are ready to begin");
var numOne = parseInt ( prompt("1. Enter your first number" + "\n" + "\n" + "Ex: 0 1 2 3 4 5 6 7 8 9")); /*  */
var mathOp =  prompt("2. Enter a mathematical operation" + "\n" + "\n" + "Ex:  \*  \/  \+  \-  "); /*  */
var numTwo = parseInt ( prompt("3. Enter your second number" + "\n" + "\n" + "Ex: 0 1 2 3 4 5 6 7 8 9") ); /*  */
var mathOpMul = numOne * numTwo;
var mathOpDiv = numOne / numTwo;
var mathOpPlu = numOne + numTwo;
var mathOpMin = numOne - numTwo;
var refreshPlese = "Refresh and try again.";


/* Print to Console */
if  (
  isNaN(numOne) ||
  isNaN(numTwo)
    ) {
  console.log("Looks like you didn't enter a number for you two number inputs." + "\n" + refreshPlese);
} else if (
          mathOp != "*" &&
          mathOp != "/" &&
          mathOp != "+" &&
          mathOp != "-"
          ) {
  console.log("Look like you didn't enter a valid math operation." + "\n" + refreshPlese);
} else if (
          mathOp == "*"
          ) {
  console.log(mathOpMul);
} else if (
          mathOp == "/" &&
          numOne < 0 &&
          numTwo < 0
          ) {
  console.log(mathOpDiv);
} else if (
          mathOp == "+"
          ) {
  console.log(mathOpPlu);
} else if (
          mathOp == "-"
          ) {
  console.log(mathOpMin);
} else {
  console.log("Looks like you tried to divied number with 0." + "\n" + refreshPlese);
}
