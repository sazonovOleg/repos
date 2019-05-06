$(".one").click(function () {
    $("[class*=exp]").hide();
    $("[class*=analysis]").hide();
    $("[class*=isp]").hide();
    $("[class*=test]").hide();
    $("[class*=exam]").show();
});
$(".two").click(function () {
    $("[class*=exp]").hide();
    $("[class*=exam]").hide();
    $("[class*=isp]").hide();
    $("[class*=test]").hide();
    $("[class*=analysis]").show();
});
$(".three").click(function () {
    $("[class*=analysis]").hide();
    $("[class*=exam]").hide();
    $("[class*=isp]").hide();
    $("[class*=test]").hide();
    $("[class*=exp]").show();
});
$(".four").click(function () {
    $("[class*=analysis]").hide();
    $("[class*=exam]").hide();
    $("[class*=exp]").hide();
    $("[class*=test]").hide();
    $("[class*=isp]").show();
});
$(".all").click(function () {
    $("[class*=analysis]").show();
    $("[class*=exam]").show();
    $("[class*=exp]").show();
    $("[class*=test]").show();
    $("[class*=isp]").show();
});

$(function(){
  $('.work_row__columns').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});