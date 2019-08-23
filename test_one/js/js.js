$(window).scroll(function () {

    var st = $(this).scrollTop();

    $(".company_title").css({
        "transform": "translate(0%, " + st / 2 + "%"
    });
    $(".company_subtitle").css({
        "transform": "translate(0%, " + st / 2 + "%"
    });
    $(".company_btn").css({
        "transform": "translate(0%, " + st + "%"
    });
});

$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 320) {
            $('.btn_menu').fadeIn(400)
            $('.menu_container').css({
                "padding": "12px 0"
            });
            $('.menu_wrap').css({
                "width": "100%",
                "margin-left": "50px",
                "justify-content": "space-between"
            });
            $('.menu_logo__fixed').fadeIn(400).css({
                "display": "block"
            });
            $('.menu_logo').fadeOut(400).css({
                "display": "none"
            });
        } else {
            $('.btn_menu').css({
                "display": "none"
            });
            $('.menu_container').css({
                "padding": "23px 0"
            });
            $('.menu_wrap').css({
                "width": "auto"
            });
            $('.menu_logo__fixed').fadeOut(400).css({
                "display": "none"
            });
            $('.menu_logo').fadeIn(400).css({
                "display": "block"
            });
        }
    });
});

$(".mobile_navbar").click(function () {
    $(".mobile_wrap").fadeIn()
        .css({
            top: 80
        })
        .animate({
            top: 775
        }, 800, function () {
            //callback
        });
    $(".mobile_navbar").fadeOut(400).css({
        "display": "none"
    });
    $(".mobile_close").fadeIn(400).css({
        "display": "block"
    });
});

$(".mobile_close").click(function () {
    $(".mobile_navbar").fadeIn(400).css({
        "display": "block"
    });
    $(".mobile_close").fadeOut(400).css({
        "display": "none"
    });
    $(".mobile_wrap").fadeOut(400).css({
        "margin-top": "-700px"
    });
});

$('.case_right').click(function () {
    $('.case_col').fadeIn()
        .css({
            "margin-left": "-120px"
        })
});
