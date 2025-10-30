( function( $ ) {
    // The wp.customize API is used to bind a function to the setting's value change.

    // --- HTML/Text Execution (Manipulating the DOM) ---
    wp.customize( 'mytheme_custom_headline', function( value ) {
        value.bind( function( new_text ) {
            // Assumes your theme template has an element with the class '.site-headline'
            // .html() allows basic HTML, .text() ensures plain text
            $( '.site-headline' ).html( new_text ); 
        } );
    } );

    // --- CSS Execution (Applying Styles) ---
    wp.customize( 'mytheme_link_color', function( value ) {
        value.bind( function( new_color ) {
            // Use jQuery's .css() method to apply the new color value to the links
            $( 'a' ).css( 'color', new_color );
        } );
    } );
    
    // --- JS Code Execution (Example: Triggering an effect on change) ---
    // You can bind a function to a setting to execute any custom JS logic,
    // like triggering an animation or showing an element.
    wp.customize( 'mytheme_custom_headline', function( value ) {
        value.bind( function( new_text ) {
            // Example: Flash the background of the headline when the text changes
            $( '.site-headline' ).stop(true, true).css('background-color', 'yellow').animate({'background-color': 'transparent'}, 500);
        } );
    } );

} )( jQuery );