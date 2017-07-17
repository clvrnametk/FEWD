var newPar1 = $("<p>");
newPar1.html("My first new paragrph is here");
newPar1.prependTo("body");

var newLiFirst = $("<li>");
newLiFirst.html("a new list item for the first list");
newLiFirst.appendTo(".first");

var newLiSecond = $("<li>");
newLiSecond.html("a new list item for the second list");
newLiSecond.prependTo(".second");

var newCircle = $("<div>");
newCircle.addClass("circle");
newCircle.appendTo(".circles");
