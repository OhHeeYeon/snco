//index.js

//VISION 슬라이드 효과
$(document).ready(function () {
    //인터벌용 변수
    var autoCall;
    //1초 간격으로 함수 fadeSlide를 자동실행
    autoCall = setInterval(fadeSlide, 3000);

    $('.vision').mouseover(function () {
        //인터벌을 제거해서 마우스 벗어날 때 슬라이드 효과를 멈추기
        clearInterval(autoCall);
    }).mouseout(function () {
        //인터벌 재가동!
        autoCall = setInterval(fadeSlide, 1000);
    });
});

//vision-fadeslide 효과 넣기
function fadeSlide() {

    //1번 슬라이드
    var firstSlide = $('.vision .slide').first();

    //2번 슬라이드
    var nextSlide = firstSlide.next();

    nextSlide.hide().addClass('active').fadeIn(800, function () {
        //다음을 위한 준비
        //1번 슬라이드를 맨 뒤로 이동
        $('.vision').append(firstSlide);

        //첫 번째 슬라이드의 z-index 제거 -> 
        firstSlide.removeClass('active');
    });
}


//BOARD tabmenu 효과
$(document).ready(function () {

    //클릭 안 한 상태에서 #news 내용 보이게 하기
    $('#news').show();
    $('.board-menu li a').click(function (e) {

        e.preventDefault();

        var aHref = $(this).attr('href');
        console.log(aHref);
        
        //선택된 탭메뉴 디자인 변경하기
        $(this).parent().addClass('on').siblings().removeClass('on');
        
        $('.content-box > .news-wrap').hide();
        $(aHref).fadeIn(600);
    });
});




