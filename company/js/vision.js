//vision.js

$(document).ready(function () {

    $('.vision-top h3').animate({
        opacity: 1
    }, 600, function () {
        $('.vision-box').eq(0).delay(100).animate({
            opacity: 1
        });
        $('.vision-box').eq(1).delay(400).animate({
            opacity: 1
        });
        $('.vision-box').eq(2).delay(700).animate({
            opacity: 1
        });
        $('.vision-box').eq(3).delay(900).animate({
            opacity: 1
        });
    });

    //문서로부터 떨어진 거리 구하기

    var box1pos = $('#people').offset().top;
    var box2pos = $('#long').offset().top;
    var box3pos = $('#educational').offset().top;
    var box4pos = $('#innovative').offset().top;

    console.log(box1pos + '\n' + box2pos + '\n' + box3pos + '\n' + box4pos);

    $('.vision-box').eq(0).click(function () {
        $('html,body').animate({
            scrollTop: box1pos
        }, 800);
    });

    $('.vision-box').eq(1).click(function () {
        $('html,body').animate({
            scrollTop: box2pos
        }, 800);
    });

    $('.vision-box').eq(2).click(function () {
        $('html,body').animate({
            scrollTop: box3pos
        }, 800);
    });

    $('.vision-box').eq(3).click(function () {
        $('html,body').animate({
            scrollTop: box4pos
        }, 800);
    });

});

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log('스크롤값: ' + scTop);

    var windowH = $(this).height();
    console.log('브라우저 화면 높이값: ' + windowH);

    var gap = Math.ceil(windowH * 0.9);
    console.log('기준간격: ' + gap);

    //스크롤 할 때마다 gap 값에 따라 내용 등장
    var visionSec = $('section').eq(0).offset().top - gap;
    console.log('내용 등장 기준값: ' + visionSec);

    if(scTop > visionSec) {
        if(scTop > 1300) {
            $('#people .txt-box').animate({
                bottom: '-2%',
                opacity:1
            },800)
        }
    }
});