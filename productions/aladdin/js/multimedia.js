//multimedia.js

$(document).ready(function () {

    $('#photo').show();
    $('.tabmenu a').click(function (e) {

        e.preventDefault();

        var aHref = $(this).attr('href');
        console.log(aHref);

        //선택된 탭메뉴 디자인 변경
        $(this).parent().addClass('on').siblings().removeClass('on');

        $('.content-box > div').hide();
        $(aHref).fadeIn(600);
    });
});