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