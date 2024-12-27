//about.js

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log('스크롤값: ' + scTop);

    var windowH = $(this).height();
    console.log('브라우저 화면 높이값: ' + windowH);

    var gap = Math.ceil(windowH * 0.9);
    console.log('기준간격: ' + gap);

    //스크롤 할 때마다 gap 값에 따라 내용 등장
    var aboutSec = $('section').eq(0).offset().top - gap;
    console.log('내용 등장 기준값: ' + aboutSec);

    if (scTop > aboutSec) {
        if (scTop > 1100) {
            $('.about-box').eq(0).find('.img-box').animate({
                bottom: '100px',
                opacity: 1
            }, 800, function () {
                $('.worldwide').find('.about-txt').fadeIn(600);
            });
        }

        if (scTop > 2000) {
            $('.about-box').eq(1).find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.all-generation').find('.about-txt').fadeIn(600);
            });
        }

        if (scTop > 3000) {
            $('.global-box1').find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.global-box1').find('.about-txt').fadeIn(600);
            });
        }

        if (scTop > 4000) {
            $('.global-box2').find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.global-box2').find('.about-txt').fadeIn(600);
            });
        }

        if (scTop > 4800) {
            $('.global-box3').find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.global-box3').find('.about-txt').fadeIn(600);
            });
        }
    }
});