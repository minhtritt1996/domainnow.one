jQuery(document).ready(function( $ ) {
    // Close all the other parent menus
    $('.wp-has-current-submenu').removeClass('wp-has-current-submenu');
  
    // Open your specific parent menu
    $('#toplevel_page_simply-static')
        .removeClass('wp-not-current-submenu')
        .addClass('wp-has-current-submenu wp-menu-open');
  
        $('#toplevel_page_simply-static > a')
        .addClass('wp-has-current-submenu wp-menu-open');

    // Ajax for JSON file creation.
    $('#create-form-config').on('click', function(e) {

        $.ajax({
            type: 'post',
            dataType: 'json',
            url: form_config.ajax_url,
            data: { 'action': 'create_form_config', 'nonce' : form_config.nonce },
            beforeSend: function() {
                $('.spinner').addClass('is-active');
             },
             complete: function(){
                $('.spinner').removeClass('is-active');
             },
            success: function(response) {
                $('#form .submit').append('<div class="ssp-success">' + response.message + '</div>');
                $('.ssp-success').fadeOut(3000);
            }
        });
    
    });
});