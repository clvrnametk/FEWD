var mySpeed = parseInt( prompt("How fast are you driving?") );
var speedLimit = parseInt( prompt("What is the speed limit?") );

if (mySpeed - speedLimit >= 10 ) {
  console.log("Slow down!");
} else if (mySpeed - speedLimit <= -10) {
  console.log("Speed up!");
} else {
  console.log("You're doing just fine.");
}
