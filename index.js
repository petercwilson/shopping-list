// Your challenge is to create an application that allows users to add, check, uncheck, 
// and remove items from a shopping list
// Use DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles
// Use this and event delegation
// You must use a CDN-hosted verion of jQuery
// Hint: you may find it helpful to read up on and use the following jQuery methods:
// .submit(), preventDefault(), toggleClass(), and closest()

// enter items they need to purchase by entering text and hitting "return" or clicking the "add item" button
// need an event listener on the submit button for both mouse click and keyboard press and add them to the list
$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        $('.shopping-list').append(`event.currentTarget's text is: ${$(event.currentTarget).text()}`);
});


// check and uncheck items on the list by clicking the "check" button

// permanently remove items from this list