$(document).ready(function() {
    $('.nav-burger').click(function() {
        $('.nav').toggleClass("active");
        $('html').removeClass("active");
    })
});
new WOW().init();