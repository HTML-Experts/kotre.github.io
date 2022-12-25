$(function () {
    $('#openbtn').click(function () {
        $('.menu-side').addClass('open');
        $('.boxbg-posi').addClass('box-open');

    });
    $('#close').click(function () {
        $('.menu-side').removeClass('open');
        $('.boxbg-posi').removeClass('box-open');
    });

    // search-bar-click-event

    $('#search-box').click(function(){
        $('.header-sesrch-bar').slideToggle();
    });

    // for-shipping-cart

    // $('#shipping-cart').click(function(){
    //     $('.shipping-cart').addClass('search-box-active');
    //     $('.boxbg-posi').addClass('box-open');
    // });
    // $('.shipping-close').click(function(){
    //     $('.shipping-cart').removeClass('search-box-active');
    //     $('.boxbg-posi').removeClass('box-open');
    // });


    // home-banner-slider
    $('.homeb-sec').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // countdown-start
    $("#getting-started")
        .countdown("2023/02/14", function (event) {
            $('#for-days').text(
                event.strftime('%D')
            );
            $('#for-hours').text(
                event.strftime('%H')
            );
            $('#for-min').text(
                event.strftime('%M')
            );
            $('#for-second').text(
                event.strftime('%S')
            );
        });




    // home-second-slider
    $('.hslider-second').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        margin: 10,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay:true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // testtimonial
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    });


    // blog-slider

    $('.hblog-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    
    // kotrestore-slider

    $('.kotrestore-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
        autoplay:true,
        // prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
        // nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


$(document).ready(function(){
    $('#shipping-cart').click(function(){
        $('.shipping-cart').addClass('search-box-active');
        $('.boxbg-posi').addClass('box-open');
    });
    $('.shipping-close').click(function(){
        $('.shipping-cart').removeClass('search-box-active');
        $('.boxbg-posi').removeClass('box-open');
    });


    // for sticky-header
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('#sticky-header').addClass('fixed-header');
        }
        else {
            $('#sticky-header').removeClass('fixed-header');
        }
    });
});