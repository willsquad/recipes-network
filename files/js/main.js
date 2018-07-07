$(document).ready(function() {
   
    lightbox.option({
      'resizeDuration': 400,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices' : true
    });

    $(document).on('click', '#menu_icon', function(){
        $('#primary-menu').slideToggle();
        $('#mobile_menu_i').toggleClass('fa-bars fa-times');
    });


    $(document).on('click', '.mega_menu_select', function(){
        $('.browse_mega_menu').fadeToggle('fast');
    });

    $(window).scroll(function(){
        $('.browse_mega_menu').hide();
    });

    $('select').niceSelect();

    $('.add_photo_div').on('click', function(){
        alert('Upload Image');
    });

    $('.trending_recipes__slider').slick({
        prevArrow:'<i class="arrow_left fas fa-chevron-left"></i>',
        nextArrow:'<i class="arrow_right fas fa-chevron-right"></i>',
        dots:false,
        initialSlide: 0,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: false,
        centerPadding: '20px',
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
});