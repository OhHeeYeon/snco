//multimedia.js

$(document).ready(function () {

    //탭메뉴 구현
    $('#photo').show();
    $('.tabmenu a').click(function (e) {

        e.preventDefault();

        var aHref = $(this).attr('href');
        console.log(aHref);

        //선택된 탭메뉴 디자인 변경
        $(this).parent().addClass('on').siblings().removeClass('on');

        $('.content-box .content').hide();
        $(aHref).fadeIn(600);
    });

    //박스 슬라이드 플러그인
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });
});