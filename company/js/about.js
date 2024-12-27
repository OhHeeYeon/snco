//about.js

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log('스크롤값: ' + scTop);

    var windowH = $(this).height();
    console.log('브라우저 화면 높이값: ' + windowH);

    var gap = Math.ceil(windowH * 0.9);
    console.log('기준간격: ' + gap);

    //스크롤 할 때마다 gap 값에 따라 내용 등장
    var aboutSec = $('.about-box').eq(0).offset().top - gap;
    console.log('내용 등장 기준값: ' + aboutSec);

    if (scTop > aboutSec) {
        if (scTop > 1100) {
            $('.about-box').eq(0).find('.img-box').animate({
                bottom: '100px'
            }, 800, function () {
                $(this).next().fadeIn(600);
            });
        }
    }


});