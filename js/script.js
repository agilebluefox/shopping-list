$(document).ready(function() {

    // Use the click action to add and remove the appropriate class
    // when the user clicks on the checkbox icon
    $('ul.list').on('click', '.checkbox', function() {
        $(this).parent('li').toggleClass('done');

        if ($(this).hasClass( "fa-square-o" )) {
            $(this).removeClass( "fa-square-o" );
            $(this).addClass( "fa-check-square-o" );
        } else {
            $(this).removeClass( "fa-check-square-o" );
            $(this).addClass( "fa-square-o" );
        }
    });

    // Use the fadeOut function to delete the list item selected
    // with a neat animation effect
    $('ul.list').on('click', '.remove', function() {
        $(this).parent('li').fadeOut(1000);
    });

    // Use the append function to add an item to the list
    var liPrefix = '<li class="list-item"><i class="fa fa-square-o checkbox" aria-hidden="true"></i><span>';
    var liSuffix = '</span><i class="fa fa-trash remove" aria-hidden="true"></i></li>';
    $( "#add-item" ).submit( function( event ) {
        if ( $("input").val() !== '' ) {
            $("ul.list").append(liPrefix + $("input").val() + liSuffix);
            //didn't work without this line (see jquery api)
            // It seems like this is necessary to prevent the browser's
            // default action which is to submit the form
            event.preventDefault();
            this.reset();
        };
    });

});