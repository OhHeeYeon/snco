//index.js

//main 슬라이드 효과
$(document).ready(function () {

    var mainSlide; //인터벌용 변수
    mainSlide = setInterval(videoSlide, 10000);

});

// fadeSlide 함수 만들기 
function videoSlide() {
    //1번 슬라이드
    var firstSlide = $('main .video-box').first();

    //2번(다음) 슬라이드
    var nextSlide = firstSlide.next();

    nextSlide.hide().addClass('active').fadeIn(800, function () {
        //다음을 위한 준비
        //1번 슬라이드를 맨뒤로 이동

        //firstSlide.appendTo('main');도 가능
        $('main').append(firstSlide);

        //첫 번째 슬라이드의 z-index 제거
        firstSlide.removeClass('active');
    });
}

//PRODUCTIONS 왼쪽 wrap 플로우 효과
//달그락거려.... padding으로 하면 괜찮긴 한데 모양이... 'margin-bottom'+'30'+'px'?????
var flowPosterL; //인터벌 담을 변수

$(document).ready(function(){
    flowPosterL = setInterval(flowL,5); //시간조절

    $('.poster-wrap.left li').hover(function(){
        clearInterval(flowPosterL); //호버시 멈춤
    }, function(){ //호버아닐 때 정상작동
        flowPosterL = setInterval(flowL, 5);
    });
});

var up = 0; //이동하는 top값을 담을 변수

function flowL() {

    up++; //top 이동값을 1씩 증가!

    var boxHeightL = $('.poster-wrap.left li').first().outerHeight();

    // 이동한 픽셀수(up)가 li 하나의 너비보다 커졌을 때 -> 다음을 위한 준비!
    if (up > boxHeightL) {
        //(위로 흘러가서)사라진 첫번째 li를 .poster-wrap의 맨 뒤로 이동!
        //.poster-wrap의 li 순서가 변경되었으므로 top값 초기화
        //동시에 이동값(up) 초기화!

        $('.poster-wrap.left').append($('.poster-wrap.left li').first()).css({
            top: 0
        });

        up = 0;

    } else {
        //up의 값을 top 값으로 적용!
        $('.poster-wrap.left').css({
            top: -up
        });
    }
}

//PRODUCTIONS 오른쪽 wrap 플로우 효과
var flowPosterR; //인터벌 담을 변수

$(document).ready(function(){
    flowPosterR = setInterval(flowR, 30); //시간조절

    $('.poster-wrap.right li').hover(function(){
        clearInterval(flowPosterR); //호버시 멈춤
    }, function(){ //호버아닐 때 정상작동
        flowPosterR = setInterval(flowR, 30);
    });
});

var down = 0; //이동하는 top값을 담을 변수

function flowR() {

    down++; //top 이동값을 1씩 증가!

    var boxHeightR = $('.poster-wrap.right li').first().outerHeight();

    // 이동한 픽셀수(down)가 li 하나의 높이보다 커졌을 때 -> 다음을 위한 준비!
    if (down > boxHeightR) {
        //(아래로 흘러가서)사라진 첫번째 li를 .poster-wrap의 맨 뒤로 이동!
        //.poster-wrap의 li 순서가 변경되었으므로 top값 초기화
        //동시에 이동값(down) 초기화!

        $('.poster-wrap.right').prepend($('.poster-wrap.right li').first()).css({
            bottom: 0
        });

        down = 0;

    } else {
        //down의 값을 top 값으로 적용!
        $('.poster-wrap.right').css({
            bottom: -down
        });
    }
}


//VISION 슬라이드 효과
$(document).ready(function () {

    var vision; //인터벌용 변수
    vision = setInterval(slide, 4000);

});

// fadeSlide 함수 만들기 
function slide() {
    //1번 슬라이드
    var firstSlide = $('.vision .slide').first();

    //2번(다음) 슬라이드
    var nextSlide = firstSlide.next();

    nextSlide.hide().addClass('active').fadeIn(400, function () {
        //다음을 위한 준비
        //1번 슬라이드를 맨뒤로 이동

        //firstSlide.appendTo('.vision');도 가능
        $('.vision').append(firstSlide);

        //첫 번째 슬라이드의 z-index 제거
        firstSlide.removeClass('active');
    });
}
//글은 정상작동/background가 엉터리임


//BOARD tabmenu 효과
/* $(document).ready(function () {

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



 */
