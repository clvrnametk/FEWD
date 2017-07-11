/* Variables */
var readyStart = prompt("You will be asked to do the following:" + "\n" + "\n" + "1. Enter a number" + "\n" + "2. Enter a math operation"  + "\n" + "3. Enter the second number." + "\n"  + "\n" + "Type \"OK\" when you are ready to begin")
var numOne = parseInt ( prompt("1. Enter your first number" + "\n" + "\n" + "Ex: 0 1 2 3 4 5 6 7 8 9")) /*  */
var mathOp =  prompt("2. Enter a mathematical operation" + "\n" + "\n" + "Ex:  \*  \/  \+  \-  ") /*  */
var numTwo = parseInt ( prompt("3. Enter your second number" + "\n" + "\n" + "Ex: 0 1 2 3 4 5 6 7 8 9") ) /*  */
var mathOpMul = numOne * numTwo
var mathOpDiv = numOne / numTwo
var mathOpPlu = numOne + numTwo
var mathOpMin = numOne - numTwo


/* Print to Console */
if  (
  mathOp == "*"
    ) {
  console.log(mathOpMul);
} else if (
          mathOp == "/"
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
}
