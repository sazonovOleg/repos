$(document).ready(function () {
    $('.nav-burger').click(function () {
        $('.nav').toggleClass("active");
        $('html').removeClass("active");
    })
});

new WOW().init();

$('.multiple-items').slick({
    infinite      : true,
    slidesToShow  : 3,
    slidesToScroll: 3,
    dots          : true,
    prevArrow     : false,
    nextArrow     : false,
    autoplay      : true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
