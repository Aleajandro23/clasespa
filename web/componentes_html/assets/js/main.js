(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {
		// fondo imagen

			if ( $( ".bg-img" ).length ) {

				$( ".bg-img" ).each(function() {

					var post 	= $(this),
						bg 		= post.data('bg');

					post.css( 'background-image', 'url(componentes_html/images/' + bg + ')' );

				});


			}

	});
	

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    (function($) {
        $('.bg-img').each(function() {
            var $element = $(this);
            var bgImage = $element.data('bg');
            $element.css('background-image', 'url(componentes_html/images/' + bgImage + ')');
        });
    })(jQuery);
});