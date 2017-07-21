console.log("Loaded bro");

var checkingBalance = 0;
var savingsBalance = 0;

var depositChecking = function(amount) {
  // add the amount to the checking balance
  checkingBalance = checkingBalance + amount;
  // show the checking balance
  showChecking();
  console.log('function ran');
};

var withdrawChecking = function(amount) {
  if (checkingBalance >= amount) {
    // subtract the amount from the checking balance
    checkingBalance = checkingBalance - amount;
    // show the checking balance
  }
  showChecking();
};

var depositSavings = function(amount) {
  // add the amount to the savings balance
  savingsBalance = savingsBalance + amount;
  // show the savings balance
  showSavings();
};

var withdrawSavings = function(amount) {
  // subtract the amount from the savings balance
  savingsBalance = savingsBalance - amount;
  // show the savings balance
  showSavings();
};

var showChecking = function() {
  $("#checking .balance h1").text(checkingBalance);
};

var showSavings = function() {
  $("#savings .balance h1").text(savingsBalance);
};

showChecking();
showSavings();

// ================ EVENTS ================== //

// When I click the Checking Deposit button...
$('#checking .deposit').click(function(){
  // add the amount to the checking balance
  var amount = parseInt($('#checking .amount').val())
  checkingBalance = checkingBalance + amount;
  // show the checking balance
  showChecking();
  $('#checking .amount').val('');
  console.log('checking deposit clicked!!');
});

// When I click the Checking Withdraw button...
$('#checking .withdraw').click(function(){
  if (checkingBalance >= $('#checking .amount').val()) {
    // subtract the amount from the checking balance
    var amount = $('#checking .amount').val()
    checkingBalance = checkingBalance - amount;
    // show the checking balance
  }
  showChecking();
  $('#checking .amount').val('');
  console.log('checking withdraw clicked!!');
});

// When I click the Savings Deposit button...
$('#savings .deposit').click(function(){
  // add the amount to the checking balance
  var amount = $('#savings .amount').val()
  savingsBalance = savingsBalance + amount;
  // show the checking balance
  showSavings();
  $('#savings .amount').val('');

  console.log('savings despoit clicked!!');
});

// When I click the Savings Withdraw button...
$('#savings .withdraw').click(function(){
  if (savingsBalance >= $('#savings .amount').val()) {
    // subtract the amount from the checking balance
    var amount = $('#savings .amount').val()
    savingsBalance = savingsBalance - amount;
    // show the checking balance
    showSavings();
    $('#savings .amount').val('');
  }
  console.log('savings withdraw clicked!!');
});
