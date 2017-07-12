// var
var toyCharacters = ["Woody", "Buzz", "Mike", "Mindy", "Moon"];


//Functions
var expressGratitude = function(name) {
  console.log("You have saved our lives, " + name);
  console.log("We are eternally grateful");
};

//For loop to name all the characters except Buzz
for (var i = 0; i < toyCharacters.length; i++) {
  if (toyCharacters[i] != "Buzz") {
    expressGratitude(toyCharacters[i])
  }
};

//Joined Word Function
var join = function(firstWord, secondWord) {
  var joinedWord = firstWord + " " + secondWord;
  return joinedWord;
};

var greeting = join("Hello", "there");


//sumOfThree
var sumOfThree = function(numOne, numTwo, numThree) {
  var total = numOne + numTwo + numThree;

  return total;
};

//productOfThree
var productOfThree = function(numOne, numTwo, numThree) {
  var total = numOne * numTwo * numThree;

  return total;
};
