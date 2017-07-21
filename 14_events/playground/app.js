console.log("this works");


///////////////////////
// Event Listeners
///////////////////////

$('.potato-generator').click( function() {
  //Function goes in here?
  var potatoList = $('.potatoes');
  var newPotato = $('<li>');
  newPotato.html('Potato Works!');
  newPotato.appendTo(potatoList);
});


$('.disappear').click(function() {
  //$('.disappear').remove();

  // which paragraph got picked
  //$(this).html("YAY YOU CLICKED ME!!");
  $(this).remove();
});

// Event listener just on the button
$('.alert-button').click(function() {
  var userInput = $('.alert-input').val();
  alert(userInput);
});

// Event listener just on the button
$('.alert-form').submit(function(event) {
  event.preventDefault();
  var userInput = $('.alert-form-input').val();
  alert(userInput);
});

//Look at keypress
$('#change-input').change(function(event){
  // event.preventDefault();
  alert('oh nooo, you touched the golden egg!');
});


$('.pokemon').click(function() {
  var clickedVal = $(this).html();
  alert(clickedVal);
});

$('.capital-button').click(function() {
  var inputVal = $('#capital-input').val();
  var caps = inputVal.toUpperCase();
  alert(caps);
});

$('.list-button').click(function() {
  var inputVal = $('#list-input').val();
  var newLi = $('<li>');
  newLi.html(inputVal);
  newLi.appendTo('.list');
});



//$('.alert-form-input').
