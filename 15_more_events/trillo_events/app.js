// Add New Item

// Should build the following HTML structure for a todo:
// <li class="item todo">
// 	<p>Wrap things in ca$h</p>
// 	<span class="label">Mark as Done</span>
// </li>

// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<p>Learn JavaScript</p>
// 	<span class="label">Remove</span>
// </li>


var addNewItem = function(item) {
  var todo = $("<li>");
  var todoText = $("<p>");
  var todoLabel = $("<span>");

  todo.addClass("item").addClass("todo");
  todoText.html(item);
  todoLabel.html("Mark as Done");
  todoLabel.addClass("label");

  todo.append(todoText).append(todoLabel);

  $("#todo-column .item-list").append(todo);
};

// Move all items from "Todo" to "Done"

var completeAll = function() {
  var doneColumn = $("#done-column .item-list");
  var todoItems = $(".item.todo");

  todoItems.find(".label").html("Remove");
  todoItems
    .removeClass("todo")
    .addClass("done")
    .appendTo(doneColumn);
};

// Remove all items from "Done"

var clearAll = function() {
  $("#done-column .item-list").empty();
};

// Render Starting items

var todoItems = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];

var doneItems = [
  "Eat pizza",
  "Save the universe"
];

var renderAllItems = function(itemsToRender) {
  for(var i = 0; i < doneItems.length; i++) {
    addNewItem(doneItems[i]);
  }

  completeAll();

  for(var i = 0; i < todoItems.length; i++) {
    addNewItem(todoItems[i]);
  }
};

// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item




// Mark a single item as Done





renderAllItems();

// ================== EVENTS =====================

$(".clear-todo").click(function() {
  completeAll();
});

$(".clear-done").click(function() {
  clearAll();
});

$("#new-item-button").click(function() {
  if ($("#new-item-text").val() != "") {
    var newTask = $("#new-item-text").val();
    addNewItem(newTask);
  }

});

// This produces a bug because it applies a listen to the item
// $('#done-column .label').click(function() {
//   $(this).closest('.item').remove();
// });

// this add a listener to the children of a parent
$('#done-column').on('click', '.label', function(){
  $(this).closest('.item').remove();
});

// listener for todo clicked
$('#todo-column').on('click', '.label', function(){
//$('#todo-column .label').click(function() {
  // var idNum = $(this).closest('li').index();
  var label = $(this);
  var item = label.closest('.item');
  // remove class to do
  item.removeClass('todo');
  // add done class
  item.addClass('done');
  // change label text
  label.html('Remove');
  // add to the done column
  item.appendTo('#done-column .item-list');

  //$(this).closest('.item').appendTo('#done-column .item-list');
});
