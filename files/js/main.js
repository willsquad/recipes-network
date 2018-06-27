$(document).ready(function() {
   
    lightbox.option({
      'resizeDuration': 400,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices' : true
    });

    $('select').niceSelect();

    $('.add_photo_div').on('click', function(){
        alert('Upload Image');
    });
});