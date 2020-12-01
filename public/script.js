$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').css('margin-top', '0px');
            $('.navbar').css('opacity','1');
        } else {
            $('.navbar').css('margin-top', '30px');
            $('.navbar').css('opacity','0.95');
        }
    });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        autoWidth: true,
        responsive:{
            0:{
                items:4
            },
            600:{
                items:9
            },
            1000:{
                items:16
            }
        }
    }),
    $(window).scrollTop(0);
});


