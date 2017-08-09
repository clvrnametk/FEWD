console.log("Loaded bro");

$(".new-tweed-button").click(function() {
  var userInput = $(".new-tweed-text").val();

  if (userInput) {
    createTweed(userInput);
  }

  $(".new-tweed-text").val("");
});

var createTweed = function(text) {
  var tweed = $("<div>");
  var tweedText = $("<p>");
  var tweedDelete = $("<span>");

  tweed.addClass("tweed");
  tweedText.addClass("tweed-text");
  tweedDelete.addClass("delete-tweed");

  tweedText.html(text);
  tweedDelete.html("&times;");

  tweed.append(tweedText).append(tweedDelete);

  tweed.prependTo(".tweeds");

  if ($('tweeds').length >= 5) {
    console.log('more than 5 entered!!');
  }
}

$(".new-tweed-text").on("input", function() {
  var userInput = $(".new-tweed-text").val();
  var trimmedInput = userInput.substring(0, 140);
  $(".new-tweed-text").val(trimmedInput);

  var remainingCharacters = 140 - trimmedInput.length;
  $(".remaining-characters").html(remainingCharacters);
});

$(".navigation-icon").click(function() {
  var navigation = $(".navigation");

  navigation.toggleClass("navigation-enabled");
});


$('.delete-tweed').click(function(){
  // check even listener
  console.log('delete tweed clicked!!');
  // remove the parent element of the object clicked
  $(this).parent().remove();
});

// store the number of children in a variable
var numChild = $('.tweeds').children().size();
