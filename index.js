// Your challenge is to create an application that allows users to add, check, uncheck, 
// and remove items from a shopping list
// Use DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles
// Use this and event delegation
// You must use a CDN-hosted verion of jQuery

// Hint: you may find it helpful to read up on and use the following jQuery methods:
// .submit(), preventDefault(), toggleClass(), and closest()

// permanently remove items from this list
// this is a function that uses an event listener on the submit form button
// next it stops the default form behavior
// the variable results is equal to the value that is passed to the input on the add item click
// then append a li and the rest of the html with the result of the submit button
// I don't believe this is the correct way to add html to the DOM but it worked

$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const results = $(this).find('input[name="shopping-list-entry"]').val();
        $('.shopping-list').append(
        '<li>' + '<span class="shopping-item">' + results + 
        '</span>' + '<div class="shopping-item-controls">' + 
        '<button class="shopping-item-toggle">' + '<span class="button-label">' 
        + 'check' + '</span>' + '</button>' + ' ' +
        '<button class="shopping-item-delete">' + '<span class="button-label">' 
        + 'delete' + '</span>' + '</button>' + '</div>' +
        '</li>');
    });
});


// check and uncheck items on the list by clicking the "check" button
// use toggleClass to toggle and delete each li added with their respective class

$(function() {
    $('ul').on('click', 'li', function(event) {
        $(this).toggleClass("shopping-item__checked");
        //this.remove();
    });
});