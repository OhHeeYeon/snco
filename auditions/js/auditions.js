//auditions.js

$(document).ready(function(){

    //초기설정
    $('.row').hide();
    $('.row').slice(0,6).show();
    //slice(start, end) : 시작 인덱스부터 종료 인덱스 이전까지
    //slice(0,6) : 인덱스 0부터 5번 이전까지 >> 0,1,2,3,4,5

    $('.more-btn').on('click',function(evt){

        evt.preventDefault();

        //클릭하면 hide()를 종료하면서 나머지 내용 한줄씩!!
        $('.row:hidden').slice(0,6).slideDown();

        var hBox = $('.row:hidden').length;

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