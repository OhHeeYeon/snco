//news.js

$(document).ready(function(){

    //초기설정
    $('.news-box').hide();
    $('.news-box').slice(0,6).show();
    //slice(start, end) : 시작 인덱스부터 종료 인덱스 이전까지
    //slice(0,6) : 인덱스 0부터 5번 이전까지 >> 0,1,2,3,4,5

    $('.more-btn').on('click',function(evt){

        evt.preventDefault();

        //클릭하면 hide()를 종료하면서 나머지 내용 한줄씩!!
        $('.news-box:hidden').slice(0,3).slideDown();

        //남은 박스 개수 확인하기기
        var hBox = $('.news-box:hidden').length;
        console.log('남은 box: ' + hBox);

        //남은 박스 없을 때 더보기 버튼 없애기
        if(hBox === 0){
            $('.more-btn').fadeOut();
        }

        //스크롤 애니메이션 
        var offTop = $(this).offset().top;

        $('html, body').animate({
            scrollTop: offTop
        }, 1500);

    });

});

//끊기면서 펼쳐지는 이유??????