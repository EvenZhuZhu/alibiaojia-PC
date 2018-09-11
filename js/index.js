var t = n =0, count;
$(document).ready(function(){
    count=$("#banner_list a").length;
    $("#banner_list a:not(:first-child)").hide();
    $("#banner ul li").click(function() {
        if($(this).hasClass('on')){
            return
        }
        var i = $(this).attr('id') -1;
        n = i;
        if (i >= count) return;
        $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(800);
        document.getElementById("banner").style.background="";
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
    });
    t = setInterval("showAuto()", 3000);
    $("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 3000);});
})
function showAuto()
{
    n = n >=(count -1) ?0 : ++n;
    $("#banner li").eq(n).trigger('click');
}
$(function () {
    $(document).scroll(function(){
        var top=$(document).scrollTop();
        if(top<700){
            $('.header').removeClass('active');
        }else {
            $('.header').addClass('active');
        }
    })
    $('#download').on('click',function () {
        $("html,body").animate({scrollTop:2000}, 500);
    })
})

