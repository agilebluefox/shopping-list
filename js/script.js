$(document).ready(function() {

    // Use the click action to add and remove the appropriate class
    // when the user clicks on the checkbox icon
    $('ul.list').on('click', 'li', function() {
        $(this).toggleClass('done');

        if ($(this).children('i.checkbox').hasClass( "fa-square-o" )) {
            $(this).children('i.checkbox').removeClass( "fa-square-o" );
            $(this).children('i.checkbox').addClass( "fa-check-square-o" );
        } else {
            $(this).children('i.checkbox').removeClass( "fa-check-square-o" );
            $(this).children('i.checkbox').addClass( "fa-square-o" );
        }
    });

    // Use the remove function to delete the list item selected
    $('ul.list').on('click', '.remove', function() {
        $(this).parent('li').remove();
    });

    // Use the append function to add an item to the list
    $( "#add-item" ).submit( function( event ) {
        console.log( $("input").val() );
        if ( $("input").val() !== '' ) {
            $("ul.list").append('<li class="list-item">\
                <i class="fa fa-square-o checkbox" aria-hidden="true"></i><span>'
                + $("input").val()
                + '</span><i class="fa fa-trash remove" aria-hidden="true"></i></li>');
            console.log("You're adding a list item");
            //didn't work without this line (see jquery api)
            // It seems like this is necessary to prevent the browser's
            // default action which is to submit the form
            event.preventDefault();
            this.reset();
        };
    });

});