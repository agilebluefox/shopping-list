$(document).ready(function() {
    // set a variable to contain the icon class to target
    var checkbox = $( "i.checkbox" );

    // Use the click function to add and remove the appropriate class
    // when the user clicks on the checkbox icon
    checkbox.click(function() {
        if ($(this).hasClass( "fa-square-o")) {
            $(this).removeClass( "fa-square-o" ).addClass( "fa-check-square-o" );
        } else if ($(this).hasClass( "fa-check-square-o" )) {
            $(this).removeClass( "fa-check-square-o" ).addClass( "fa-square-o" );
        };
        // Finally, add or remove the "done" class to the list item
        $(this).parent( "li" ).toggleClass( "done" );
    });

    // Set a variable to contain the target for the delete action
    var trash = $( "i.remove" );

    // Use the remove function to delete the list item selected
    trash.click(function() {
        $(this).parent( "li" ).remove();
    });

    // Use the append function to add an item to the list
    var add = $( "#add-item" );

    add.submit( function( event ) {
        console.log( $("input").val() );
        if ( $("input").val() !== '' ) {
            $("ul.list").append('<li class="list-item">\
                <i class="fa fa-square-o checkbox" aria-hidden="true"></i><span>'
                + $("input").val()
                + '</span><i class="fa fa-trash remove" aria-hidden="true"></i></li>');
            console.log("You're adding a list item");
            event.preventDefault();  //didn't work without this line (see jquery api)
        };
    });

});