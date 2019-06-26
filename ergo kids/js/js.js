const headerTitle = document.querySelector('.header_title'),
      mainIner = document.querySelectorAll('.main_iner'),
      mainTitle = document.querySelectorAll('.main_title'),
      wrapIcon = document.querySelectorAll('.wrap_icon'),
      footerBtn = document.querySelectorAll('.footer_btn'),
      crkl = document.querySelectorAll('.circle'),
      circleBlock = document.querySelectorAll('.circle_block');

//  $('.orange').click(function() {
//     $('.header_title').css({"color": "#f53916"});
//      
//    });
	$(".orange").click(function () {
		$(".header_title").css({'color':'#ff7d3d'});
        $(".main_iner").css({'border-color':'#ff7d3d'});
        $(".main_iner__brd").css({'border-color':'#ff7d3d'});
        $(".main_title").css({'color':'#ff7d3d'});
        $(".wrap_icon").css({'background':'#ff7d3d'});
        $(".footer_btn").css({'background':'#ff7d3d'});
        $(".circle").css({'border-color':'#ff7d3d'});
        $(".circle_block").css({'background':'#ff7d3d'});
        $(".footer_iner__title").css({'color':'#ff7d3d'});
        $(".chair.orange").css({'opacity':'1'});
        $(".chair.green").css({'opacity':'0'});
        $(".main_green").css({'opacity':'0'});
        $(".main_orange").css({'opacity':'1'});
        $(".line_green").css({'opacity':'0'});
        $(".line_orange").css({'opacity':'1'});
		});

	$(".green").click(function () {
		$(".header_title").css({'color':'#7bb235'});
        $(".main_iner").css({'border-color':'#7bb235'});
        $(".main_iner__brd").css({'border-color':'#58961e'});
        $(".main_title").css({'color':'#7bb235'});
        $(".wrap_icon").css({'background':'#7db12e'});
        $(".footer_btn").css({'background':'#91ca00'});
        $(".circle").css({'border-color':'#7eb339'});
        $(".circle_block").css({'background':'#7db12e'});
        $(".footer_iner__title").css({'color':'#7bb235'});
        $(".chair.orange").css({'opacity':'0'});
        $(".chair.green").css({'opacity':'1'});
        $(".main_green").css({'opacity':'1'});
        $(".main_orange").css({'opacity':'0'});
        $(".line_orange").css({'opacity':'0'});
        $(".line_green").css({'opacity':'1'});
		});