/** this function adds and deletes items in the shopping list form 
 * 
*/

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
        $('#shopping-list-entry').val(placeholder=" ");
    });

    $('.shopping-item-toggle').on('click', function(event) {
        $(this).closest("li:first-child").toggleClass("shopping-item__checked");
    });

    $('.shopping-item-delete').on('click', function(event) {
        $('ul > li:first-child').remove();
    });
});