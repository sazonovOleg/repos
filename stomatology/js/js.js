$('.nav-mobile__close').click(function () {
    $('.nav-mobile__menu').css('opacity', '0').css('transition', '0.7s').css('z-index', '-1');
    $('.navbar-toggler-icon').css('opacity', '1').css('transition', '0.7s');
});
$('.navbar-toggler-icon').click(function () {
    $('.nav-mobile__menu').css('opacity', '1').css('transition', '0.7s').css('z-index', '100');
    $('.navbar-toggler-icon').css('opacity', '0.3').css('transition', '0.7s');
});
