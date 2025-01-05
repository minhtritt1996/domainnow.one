jQuery(document).ready(function( $ ) {

    // Show hide description for GitHub.
    $('#deliveryMethod').on( 'change', function() {
        var delivery_method = $(this).val();

        if( 'github' === delivery_method ) {
            $('.github-deploy').show();
        } else {
            $('.github-deploy').hide();
        }
    });

    // Delete repository.
	$('#github-add').on('click', function(){
		$.ajax({
			type: 'POST',
			url: sspg_ajax.ajax_url,
			data: {'action' : 'add_repository', 'nonce' : sspg_ajax.add_nonce },
			dataType: 'json',
            error: function(response) {
                // Remove old messages.
                $('.updated').remove();
                $('.error').remove();

                if ( response.message ) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                    $( '#settingsPage' ).prepend( message );
                }
            },
            success: function(response) {
                // Remove old messages.
               $('.updated').remove();
               $('.error').remove();

                var message = '<div class="fade updated"><p><strong>' + response.message + '</strong></p></div>';
                
                if ( true == response.error ) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                }
                $( '#sistTabs' ).append( message );
            },
		});		
	});

    // Delete repository.
	$('#github-delete').on('click', function(){
		$.ajax({
			type: 'POST',
			url: sspg_ajax.ajax_url,
			data: {'action' : 'delete_repository', 'nonce' : sspg_ajax.delete_nonce },
			dataType: 'json',
            error: function(response) {
                // Remove old messages.
                $('.updated').remove();
                $('.error').remove();

                if ( response.message ) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                    $( '#settingsPage' ).prepend( message );
                }
            },
            success: function(response) {
                // Remove old messages.
                $('.updated').remove();
                $('.error').remove();

                var message = '<div class="fade updated"><p><strong>' + response.message + '</strong></p></div>';

                if ( true == response.error ) {
                    var message = '<div class="fade error"><p><strong>' + response.message + '</strong></p></div>';
                }
                $( '#sistTabs' ).append( message );
            },
		});		
	});
});