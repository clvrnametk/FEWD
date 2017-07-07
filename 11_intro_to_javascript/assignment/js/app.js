/* Variables */
var prodPrice = parseInt( prompt("How much does the product cost?"))
var prodInventory = parseInt( prompt("How many of this product are in stock?"))
var userMoney = parseInt( prompt("How much money do you have?"))
var userQty = parseInt( prompt("How many of this product would you like to purchase?"))


/* Print to Console */
if  (
    prodInventory >= 1 &&
    userQty >= 1 &&
    prodPrice > 0 &&
    userQty <= prodInventory &&
    userMoney >= prodPrice * userQty
    ) {
  console.log("Purchase complete");
} else if (
          prodInventory >= 1 &&
          userQty >= 1 &&
          prodPrice > 0 &&
          userQty <= prodInventory && /* qty=2 Inv=2 */
          userMoney < prodPrice * userQty /* Money=20 Price=10 */
          ) {
  console.log("Not enough money, you are short " + "$" + ((prodPrice * userQty) - userMoney));
} else if (
          prodInventory >= 1 &&
          userQty >= 1 &&
          prodPrice > 0 &&
          userQty > prodInventory && /* qty=2 Inv=2 */
          userMoney >= prodPrice * userQty /* Money=10 Price=10 */
          ) {
  console.log("Not enough inventory available, reduce your qty to " + prodInventory + " to proceed.");
} else if (
          prodInventory >= 1 &&
          userQty >= 1 &&
          prodPrice > 0 &&
          userQty > prodInventory && /* qty=2 Inv=1 */
          userMoney < prodPrice * userQty /* Money=10 Price=10 */
          ) {
  console.log("No dice, there is only " + prodInventory + " available and you are short " + "$" + ((prodPrice * userQty) - userMoney) + ".");
} else if (
          prodInventory < 1 &&
          userQty >= 1 &&
          prodPrice > 0
          ) {
  console.log("Sorry this item is out of stock.");
} else if (
          prodInventory >= 1 &&
          userQty >= 1 &&
          prodPrice == 0
          ) {
  console.log("This item is free, there are " + prodInventory + " available, take as many as you want.");
} else if (
          prodInventory >= 1 &&
          userQty < 1 &&
          prodPrice > 0
          ) {
  console.log("You indicated that you wanted to purchase " + userQty + " of this item. You have to buy at least one to proceed with checkout.");
} else if (
          typeof prodPrice != "number" ||
          typeof prodInventory != "number" ||
          typeof userMoney != "number" ||
          typeof userQty != "number"
          ){
  console.log("Please make sure to enter numbers only, refresh the page and try again.");
} else {
  console.log("Looks like you entered a few things in are were entered wrong, I will be adding validation for numbers soon");
}
