//multimedia.js

$(document).ready(function () {

    //탭메뉴 구현
    $('#photo').show();
    $('.tabmenu a').click(function (e) {

        e.preventDefault();

        var aHref = $(this).attr('href');
        console.log(aHref);

        //선택된 탭메뉴 디자인 변경
        $(this).parent().addClass('on').siblings().removeClass('on');

        $('.content-box .content').hide();
        $(aHref).fadeIn(600);
    });

    //박스 슬라이드 플러그인
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });
});

/* 비디오 메뉴 */
$(document).ready(function() {
    $(".open-modal").click(function(event) {
        event.preventDefault();
        
        // 클릭한 썸네일의 동영상 링크 가져오기
        let videoUrl = $(this).data("video");

        // 모달 창에 동영상 URL 설정
        $("#videoFrame").attr("src", videoUrl); // 자동 재생 활성화
        $("#videoModal").fadeIn();
    });

    // 모달 닫기 버튼
    $(".close").click(function() {
        $("#videoModal").fadeOut();
        $("#videoFrame").attr("src", ""); // 영상 정지
    });

    // 모달 바깥 영역 클릭 시 닫기
    $("#videoModal").click(function(event) {
        if ($(event.target).is("#videoModal")) {
            $("#videoModal").fadeOut();
            $("#videoFrame").attr("src", ""); // 영상 정지
        }
    });
});