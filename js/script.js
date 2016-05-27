$(document).ready(function() {
    // set a variable to contain the icon class to target
    var checkbox = $( "i.checkbox" );

    // Use the click function to add and remove the appropriate class
    // when the user clicks on the checkbox icon
    checkbox.click(function() {
        if ($(this).hasClass("fa-square-o")) {
            $(this).removeClass("fa-square-o").addClass("fa-check-square-o");
        } else if ($(this).hasClass("fa-check-square-o")) {
            $(this).removeClass("fa-check-square-o").addClass("fa-square-o");
        }
        // Finally, add or remove the "done" class to the list item
        $(this).parent( "li" ).toggleClass("done");
    });




});