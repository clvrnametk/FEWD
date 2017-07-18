//////////////////////
// VARIABLES
//////////////////////

// Find UL in todo list
var toDoTopUl = $('#todo-column').find('ul');

// Find UL in todo list
var doneTopUl = $('#done-column').find('ul');

// Starter items Array
var items = [
  'Wash the car',
  'Wrap things in ca$h',
  'Write blog post about selfies'
];

// Done items Array
var itemsDone = [
  'Added new items to the list',
  'finished css additions',
  'checked it in the browser'
];

// To Do Items Array
var itemsToDo = [
];




//////////////////////
// FUNCTIONS
//////////////////////

//New to-do item function
/*
Should build the following HTML structure for a todo:
<li class="item todo">
	<p>Wrap things in ca$h</p>
	<span class="label">Mark as Done</span>
</li>
*/
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

//New done item function
/*
Should build the following HTML structure for a done item:
<li class="item done">
<p>Learn JavaScript</p>
<span class="label">Remove</span>
</li>
*/
var addDoneItem = function(item) {
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
  for (var i = 0; i < items.length; i++) {
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
  var doneTopUlFun = $('#done-column').find('ul');
  var list = document.getElementById('done-column');
  // As long as <ul> has a child node, remove it
  while (list.hasChildNodes()) {
      if (list.firstChild != $('.column-heading')) {
        list.removeChild(list.firstChild);
      }
  }
//  for (var i = 0; i < items.length; i++) {
//    var firstEl = toDoTopUl.find('li').eq(0);
//    firstEl.removeChild(firstEl.childNodes[0])
//  }
};

// Render All Items
var renderAllItems = function() {
  for (var i = 0; i < items.length; i++) {
    addNewItem(itemsToDo[i]);
  }
};

// Render Start items
var renderStarterItems = function() {
  for (var i = 0; i < items.length; i++) {
    addNewItem(items[i]);
  }
};




//////////////////////
// EXECUTION
//////////////////////

// Render Starter Items
renderStarterItems();
//for (var i = 0; i < items.length; i++) {
//  renderAllItems(items[i]);
//}

for (var i = 0; i < itemsDone.length; i++) {
  addDoneItem(itemsDone[i]);
}


// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

var removeItem = function(itemNumber) {};

// Mark a single item as Done

var markAsDone = function(itemNumber) {};
