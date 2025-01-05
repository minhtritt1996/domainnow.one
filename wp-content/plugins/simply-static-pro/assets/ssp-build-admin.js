jQuery(document).ready(function( $ ) {
  // Close all the other parent menus
  $('.wp-has-current-submenu').removeClass('wp-has-current-submenu');

  // Open your specific parent menu
  $('#toplevel_page_simply-static')
      .removeClass('wp-not-current-submenu')
      .addClass('wp-has-current-submenu wp-menu-open');

      $('#toplevel_page_simply-static > a')
      .addClass('wp-has-current-submenu wp-menu-open');

  // Start generation of build.
	$('.generate-build').on('click', function(){
    var term_id = $(this).attr('data-term-id');

		$.ajax({
			type: 'POST',
			url: sspb_ajax.ajax_url,
			data: {'action' : 'apply_build', 'nonce' : sspb_ajax.run_build_nonce, 'term_id' : term_id },
			dataType: 'json',
      success: function(response) {
          if ( response.success ) {       
            window.location.replace( sspb_ajax.redirect_url );
          }
      },
		});		
	});
});