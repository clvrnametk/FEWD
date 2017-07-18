//////////////////////
// VARIABLES
//////////////////////

// Find UL in todo list
var toDoTopUl = $('#todo-column').find('ul');

// Find UL in todo list
var doneTopUl = $('#done-column').find('ul');

// Starter items Array
var itemsStarterToDo = [
  'Wash the car',
  'Wrap things in ca$h',
  'Write blog post about selfies'
];

// Done items Array
var itemsStarterDone = [
  'Added new items to the list',
  'finished css additions',
  'checked it in the browser'
];


// Done items Array
var itemsDone = [
];

// To Do Items Array
var itemsToDo = [
];




//////////////////////
// FUNCTIONS
//////////////////////

//Add single to-do item function
var addNewItem = function(item) {
  itemsToDo.push(item);
  var newItem = $('<li>');
  newItem.addClass('item todo');
  newItem.prependTo(toDoTopUl);
  var newItemP = $('<p>');
  newItemP.html(item);
  newItemP.appendTo(newItem);
  var newItemSpan = $('<span>');
  newItemSpan.html('Mark as Done');
  newItemSpan.addClass('label');
  newItemSpan.appendTo(newItem);
};

//Add Single done item function
var addDoneItem = function(item) {
  itemsDone.push(item);
  var newItem = $('<li>');
  newItem.addClass('item done');
  newItem.prependTo(doneTopUl);
  var newItemP = $('<p>');
  newItemP.html(item);
  newItemP.appendTo(newItem);
  var newItemSpan = $('<span>');
  newItemSpan.html('Remove');
  newItemSpan.addClass('label');
  newItemSpan.appendTo(newItem);
};

// Move all items from "Todo" to "Done"
var completeAll = function() {
  for (var i = 0; i < itemsToDo.length; i++) {
    var firstEl = toDoTopUl.find('li').eq(0);
    firstEl.prependTo(doneTopUl);
    firstEl.removeClass('todo');
    firstEl.addClass('done');
    var firstElSpan = firstEl.find('span');
    firstElSpan.html("Remove");
  }
};

// Remove all items from "Done"
var clearAll = function() {
  var doneTopUl = $('#done-column').find('ul');
  console.log(doneTopUl);
  var list = document.getElementById('done-column');
  console.log(list);
  doneTopUl.empty();
  debugger
  // As long as <ul> has a child node, remove it
  // while (doneTopUl.children().length > 0) {
  //     doneTopUl.children().first().remove()
  // }
//  for (var i = 0; i < items.length; i++) {
//    var firstEl = toDoTopUl.find('li').eq(0);
//    firstEl.removeChild(firstEl.childNodes[0])
//  }
};

// Render All Items
var renderAllItems = function() {
  for (var i = 0; i < items.length; i++) {
    addNewItem(itemsToDo[i]);
    itemsStarterDone.pop(i);
  }
};

// Render Start To Do items
var renderStarterToDoItems = function() {
  for (var i = 0; i < itemsStarterToDo.length; i++) {
    addNewItem(itemsStarterToDo[i]);
  }
};

// Render Start Done items
var renderStarterDoneItems = function() {
  for (var i = 0; i < itemsStarterDone.length; i++) {
    addDoneItem(itemsStarterDone[i]);
  }
};



//////////////////////
// EXECUTION
//////////////////////

// Render Starter Items
renderStarterToDoItems();
renderStarterDoneItems();




// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

var removeItem = function(itemNumber) {};

// Mark a single item as Done

var markAsDone = function(itemNumber) {};
