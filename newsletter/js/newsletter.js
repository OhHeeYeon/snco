//newsletter.js

var autoCall;

$(document).ready(function () {

    autoCall = setInterval(flow, 10); 
    //흘러가는 속도 조절 = 자동실행 시간으로 조절!

});

var moveNum = 0; //이동하는 left값을 담을 변수!

function flow() {
    moveNum++; //left 이동값을 1씩 증가!

    var boxWidth = $('.logo_slide li').first().outerWidth();

    // if else문
    // 이동한 픽셀수(moveNum)가 li 하나의 너비보다 커졌을 때 -> 다음을 위한 준비!
    if (moveNum > boxWidth) {
        //(왼쪽으로 흘러가서)사라진 첫번째 li를 .logo_slide의 맨 뒤로 이동!
        //.logo_slide의 li 순서가 변경되었으므로 left값 초기화
        //동시에 이동값(moveNum) 초기화!
        $('.logo_slide').append($('.logo_slide li').first()).css({
            left: 0
        });

        moveNum = 0;

    } else {
        //moveNum의 값을 left 값으로 적용!
        $('.logo_slide').css({
            left: -moveNum
        });
    }

}

//끊기는 이유???? li 너비가 달라서?????