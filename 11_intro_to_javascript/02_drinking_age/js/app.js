var age = parseInt ( prompt("How old are you?"));
var yearsleft = 21 - age;

if (age > 21) {
  console.log("Come on in");
} else {
  console.log("You're not old enough");
}

if (yearsleft > 1) {
  console.log("Come back in " + yearsleft + " years");
} else {
  console.log("Come back in " + yearsleft + " year");
}
