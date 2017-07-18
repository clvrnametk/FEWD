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


$(".disappear").click(function() {
  //$('.disappear').remove();

  // which paragraph got picked
  $(this).html("YAY YOU CLICKED ME!!");
});
