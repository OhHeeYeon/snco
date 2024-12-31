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
var flowPosterL; //인터벌 담을 변수

$(document).ready(function(){
    flowPosterL = setInterval(flowL,40); //시간조절

    $('.poster-wrap.left li').hover(function(){
        clearInterval(flowPosterL); //호버시 멈춤
    }, function(){ //호버아닐 때 정상작동
        flowPosterL = setInterval(flowL, 40);
    });
});

var up = 0; //이동하는 top값을 담을 변수

function flowL() {

    up++; //top 이동값을 1씩 증가!

    var boxHeightL = $('.poster-wrap.left li').first().outerHeight(true);//margin값 포함(true)

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
var boxHeightR = 0; //포스터 박스의 높이를 담을 변수!
var down; 

$(document).ready(function(){

    //초기설정 - 맨 마지막 포스터를 맨 앞으로 이동, top값 변경 

    boxHeightR = $('.poster-wrap.right li').last().outerHeight(true); 
    console.log('문서가 로딩되었을 때 박스값: ' + boxHeightR);

    $('.poster-wrap.right').prepend($('.poster-wrap.right li').last()).css({
        top: -boxHeightR //맨 뒤에서 끌어온 포스터 높이만큼 top값을 이동시켜(-462) 두 번째 포스터를 첫번째로 보이게 설정
    });

    down = boxHeightR;

    //맨 뒤 포스터를 맨 앞으로 준비시킨 다음 flow 실행! (왼쪽 poster는 flow 실행 후 준비시키기)
    flowPosterR = setInterval(flowR, 40);

    $('.poster-wrap.right li').hover(function(){
        clearInterval(flowPosterR);
    }, function(){
        flowPosterR = setInterval(flowR, 40);
    });
});

//var down = 0;

function flowR (){

    //down값을 계속 감소시켜 0에 근접하게 = 아래로 이동
    down--;
    console.log(down);

    if(-down >= 0){

        //console.log('테스트출력');
        //맨 앞으로 이동시켰던 포스터가 다 지나가면(top 값이 0이 되면) 다시 포스터 높이값만큼 top값을 변경하여 두번째 포스터부터 보이도록 하기

        boxHeightR = $('.poster-wrap.right li').last().outerHeight(true); 

        $('.poster-wrap.right').prepend($('.poster-wrap.right li').last()).css({
            top: -boxHeightR
        });

        down = boxHeightR;

    } else {
        $('.poster-wrap.right').css({
            top: -down
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

    nextSlide.hide().addClass('active').fadeIn(700, function () {
        //다음을 위한 준비
        //1번 슬라이드를 맨뒤로 이동

        //firstSlide.appendTo('.vision');도 가능
        $('.vision').append(firstSlide);

        //첫 번째 슬라이드의 z-index 제거
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

        $('.content-box .news-wrap').hide();
        $(aHref).fadeIn(600);
    });
});




