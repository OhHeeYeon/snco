//about.js

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log('스크롤값: ' + scTop);

    var windowH = $(this).height();
    console.log('브라우저 화면 높이값: ' + windowH);

    var gap = Math.ceil(windowH * 0.9);
    console.log('기준간격: ' + gap);

    //worldwide 내용 등장
    //스크롤 할 때마다 gap 값에 따라 내용 등장
    var aboutSec1 = $('section').eq(2).offset().top - gap;
    console.log('worldwide 등장 기준값: ' + aboutSec1);

    if (scTop > aboutSec1) {
        if (scTop > 1000) {
            $('.about-box').eq(0).find('.img-box').animate({
                bottom: '100px',
                opacity: 1
            }, 800, function () {
                $('.worldwide').find('.about-txt').fadeIn(600);
            });
        }
    }

    var aboutSec2 = $('section').eq(3).offset().top - gap;
    console.log('all-gen 등장 기준값: ' + aboutSec2);
    if (scTop > aboutSec2) {
        if (scTop > 1000) {
            $('.about-box').eq(1).find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.all-generation').find('.about-txt').fadeIn(600);
            });
        }
    }


    var aboutSec3 = $('section').eq(4).offset().top - gap;
    if (scTop > aboutSec3) {
        if (scTop > 1000) {
            $('.global').eq(0).find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.global-box1').find('.about-txt').fadeIn(600);
            });
        }
    }

    var aboutSec4 = $('section').eq(5).offset().top - gap;
    if (scTop > aboutSec4) {
        if (scTop > 1000) {
            $('.global').eq(1).find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.global-box2').find('.about-txt').fadeIn(600);
            });
        }
    }

    var aboutSec5 = $('section').eq(6).offset().top - gap;
    if (scTop > aboutSec5) {
        if (scTop > 1000) {
            $('.global').eq(2).find('.img-box').animate({
                bottom: 0,
                opacity: 1
            }, 800, function () {
                $('.global-box3').find('.about-txt').fadeIn(600);
            });
        }
    }


});