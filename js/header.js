//header.js

$(document).ready(function(){
    $('.gnb > li').hover(function(){
        //호버한 대메뉴의 서브메뉴를 찾아서 나타내기
        $(this).find('.lnb').stop().fadeIn();
        $('.menu-wrap').find('.bg').stop().fadeIn();
    }, function(){
        //호버 아닐 때 페이드 아웃!
        $('.lnb').stop().fadeOut();
        $('.menu-wrap').find('.bg').stop().fadeOut();
    });
});