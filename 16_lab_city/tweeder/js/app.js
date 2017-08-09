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
// I shouldn't be able to type more than 140 characters
$('.new-tweed-text').on('input', function() {
  // Check to see if this works
  console.log($('.new-tweed-text').val());

  // Store input value in a string
  var userInput = $('.new-tweed-text').val();

  if (userInput.length > 6) {
    // test to see if it is working
    console.log('stop typing!!');
    //var to store the original substring: 6 characters
    var correctLength = userInput.substring(0, 6);
    // reinsert the correct length text
    $(".new-tweed-text").val(correctLength);
    // check to see that the correct length is all good
    console.log('you should have stopped at' + correctLength);
    // Just checking to see that not enough has been entered
  } else {
    console.log('keep typing');
  }
});


// Toggle Class using this method
$('.navigation-icon').click(function() {
  // listen for click
  console.log('nav clicked!!');
  var navigation = $('.navigation');
  // add class
  navigation.toggleClass('navigation-enabled');
  // if (navigation.hasClass('navigation-enabled')) {
  //     navigation.removeClass('navigation-enabled')
  // } else {
  //   navigation.addClass('navigation-enabled')
  // }

});




// Add a "characters remaining" span below the tweed textarea
// that displays how many more characters I can type



// Add a timestamp in each Tweed stating when I Tweeded it
