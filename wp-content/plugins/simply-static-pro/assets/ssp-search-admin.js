jQuery(document).ready(function( $ ) {
    // Ajax for JSON file creation.
    $('#create-index').on('click', function(e) {

        $.ajax({
            type: 'post',
            dataType: 'json',
            url: search_config.ajax_url,
            data: { 'action': 'create_search_index', 'nonce' : search_config.nonce },
            beforeSend: function() {
                $('.spinner').addClass('is-active');
             },
             complete: function(){
                $('.spinner').removeClass('is-active');
             },
            success: function(response) {
                $('#search .submit').append('<div class="ssp-success">' + response.message + '</div>');
                $('.ssp-success').fadeOut(3000);
            }
        });
    
    });
});