console.log('loaded bro! new file');

var userInput = $('.container #city-type')
var sfInput = ['San Francisco', 'SF', 'Bay Area']


// Set background

// Form Submition Listener and Function
$('.container form').submit(function() {
  // Prevent page from reloading
  event.preventDefault();
  // Check to see if content is blank
  if ($('.container #city-type').val() != '') {
    // Confirm submission
    console.log('Submitted!');
    // NYC Submission
    if (userInput.val() == 'New York' ||
        userInput.val() == 'New York City' ||
        userInput.val() == 'NYC') {
      $('body').removeClass();
      $('body').addClass('nyc');
      console.log('NYC submitted');

    } else if (userInput.val() == 'San Francisco' ||
               userInput.val() == 'SF' ||
               userInput.val() == 'Bay Area') {
      $('body').removeClass();
      $('body').addClass('sf');
      console.log('sf');

    } else if (userInput.val() == 'Los Angeles' ||
               userInput.val() == 'LA' ||
               userInput.val() == 'LAX') {
      $('body').removeClass();
      $('body').addClass('la');
      console.log('la');

    } else if (userInput.val() == 'Austin' ||
               userInput.val() == 'ATX') {
      $('body').removeClass();
      $('body').addClass('austin');
      console.log('austin');

    } else if (userInput.val() == 'Sydney' ||
               userInput.val() == 'SYD') {
      $('body').removeClass();
      $('body').addClass('sydney');
      console.log('sydney');

    } else {
      alert('Sorry')
      console.log('invlaid entry');
    }

  }
  // Clear Form Field
  $('.container #city-type').val('')
});
