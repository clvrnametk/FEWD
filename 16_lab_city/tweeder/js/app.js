// When I click the Tweed button, I want my
// Tweed to appear at the top of my activity
$('.new-tweed-button').click(function() {
  //check to see if it works
  console.log('clicked!!');
  // store input in a var
  var userInput = $('.new-tweed-text').val();

  // makle sure a vlue is entered
  // I shouldn't be able to make empty Tweeds
  // convert to false: empoty string, 0, null,
  if (userInput != '') {
    // Fire add new Tweed Function
    addNewTweed(userInput)
  }
});


// Add New Tweed Function
var addNewTweed = function(userInput) {
//function addNewTweed(userInput) {
  // Create New HTML elements
  var newTweedDiv = $("<div>");
  var newTweedP = $('<p>');
  var newTweedX = $('<span>');

  // Populate html elemtns with content
  newTweedP.html(userInput);
  newTweedX.html('&times;');

  // Add HTML elemtns to the page
  newTweedDiv.prependTo($('.tweeds'));
  newTweedP.appendTo(newTweedDiv);
  newTweedX.appendTo(newTweedP);

  // Add classes
  newTweedDiv.addClass('tweed');
  newTweedP.addClass('tweed-text');
  newTweedX.addClass('tweed-x');

  // clear input
  $('.new-tweed-text').val('');
};

// check length
// $(".new-tweed-text").keypress(function(event) {
//   var userInput = $('.new-tweed-text').val();
//
//   if (userInput.length < 6) {
//     console.log('stop typing');
//   } else {
//     event.preventDefault();
//   }
//   console.log("You typed something!!");
// });

// $(".new-tweed-text").keypress(function(event) {
//   var userInput = $(".new-tweed-text").val();
//
//   if (userInput.length > 5) {
//     event.preventDefault();
//   } else {
//     var remainingChar = 6 -
//   }
// });

$('.navigation-icon').click(function() {
  // listen for click
  console.log('nav clicked!!');

  // add class
  if ($('.navigation-items').hasClass('navigation-enabled')) {
      $('.navigation-items').removeClass('navigation-enabled')
  } else {
    $('.navigation-items').addClass('navigation-enabled')
  }

});

// I shouldn't be able to type more than 140 characters



// Add a "characters remaining" span below the tweed textarea
// that displays how many more characters I can type



// Add a timestamp in each Tweed stating when I Tweeded it
