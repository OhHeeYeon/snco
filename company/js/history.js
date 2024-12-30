//history.js

$(document).ready(function () {

    $('.history h3').animate({
        opacity: 1
    }, 600, function(){
        
    });
});

$(window).scroll(function(){
    var scTop = $(this).scrollTop();
    console.log('스크롤값: ' + scTop);

    var windowH = $(this).height();
    console.log('브라우저 화면 높이값: ' + windowH);

    var gap = Math.ceil(windowH * 0.2);
    console.log('기준간격: ' + gap);

    //연도별 내용 등장
    var history2024 = $('.box2024').offset().top - gap;
    console.log('2024 등장 기준값: ' + history2024);

    if(scTop > history2024) {
        if(scTop > 700) {
            $('.box2024').find('img').eq(0).animate()
        }
    }
});