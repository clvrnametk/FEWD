$(function() {
	console.log('Loaded, bro');
});

// Defined Variables
var leftSideDiv = (".left");
var rightSideDive = (".right");
var newBody = ("body");

//1. Select the first element in the left side div's ul and
//   move it so that it is the first element of the right side div's ul

$(".left .list li:first-child").addClass("firstListItem");

$(".firstListItem").appendTo(".right .list");


//2. Select all of the child elements of the left side div
//   and change their font to be `Helvetica`

$(".left .list li").css("font-family: Helvetica");
