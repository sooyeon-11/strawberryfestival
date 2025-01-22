// depth2
$(".gnb").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().fadeIn();
  // $("#header").addClass("active");
});

$(".gnb").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().fadeOut();
  // $("#header").removeClass("active");
});

// mgnb
$(".ham").click(function () {
  // mgnb_wrap이 이미 내려와 있으면, 다시 올라가게 처리
  if ($(".mgnb_wrap").css("top") === "0px") {
    $(".mgnb_wrap").animate({
      top: "-100%"  // 위로 올리기
    }, 500);
    $("#header").removeClass("active");
  } else {
    // 그렇지 않으면 내려가게 처리
    $(".mgnb_wrap").animate({
      top: "0"  // 아래로 내리기
    },);
    $("#header").addClass("active");
  }
  $(this).toggleClass("active");
});

// 서브 메뉴 토글
$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

// 팝업창
$('.close_btn').on('click', function () {
  $('.popup').fadeOut();
});


// 유튜브, 썸네일
function playVideo() {
  // 썸네일 숨기기
  const thumbnail = document.querySelector('.thumbnail');
  thumbnail.style.display = 'none';

  // iframe이 자동 재생되도록 다시 로드
  const iframe = document.getElementById('youtube-video');
  const src = iframe.src;
  iframe.src = src; // iframe src를 재설정하여 자동 재생
}

// 프로그램
const program_list = new Swiper(".program_list", {
  loop: true, // 기본값 false,
  speed: 1000,
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  breakpoints: {
    0: { //분기점 
      slidesPerView: 2,
      spaceBetween: 15,
    },

    361: { //분기점 
      slidesPerView: 2,
      spaceBetween: 20,
    },


    601: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    770: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    780: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    790: {
      slidesPerView: 3,
      spaceBetween: 35,
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1300: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// 갤러리 스와이퍼
const gallery_list = new Swiper(".gallery_list", {
  loop: true, // 기본값 false,
  speed: 2000,
  centeredSlides: true,
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동재생이 비활성화 되지 않음
  },
  breakpoints: {
    0: {
      // 가로해상도가 640px 이상일 경우
      slidesPerView: 1.3,

    },

    400: {
      // 가로해상도가 640px 이상일 경우
      slidesPerView: 1.5,

    },

    1024: {
      // 가로해상도가 1024px 이상일 경우
      slidesPerView: 2,

    },

    1400: {
      // 가로해상도가 1024px 이상일 경우
      slidesPerView: 2.3,

    },
  },
});

//WOW
new WOW().init();
wow = new WOW({
  boxClass: 'intro_txt',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'inner',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'video_txt',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'popup',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'program',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'apply_list',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'notice_inner',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'gallery_inner',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})

wow = new WOW({
  boxClass: 'location',      //  스크롤 이벤트를 등록할 클래스 
  animateClass: 'animated', // 기본값 animated => animate.css library 를 적용한다 
  offset: 0,          // data-wow-offset 의 기본값 0 
  mobile: true,       // 모바일에서 동작할 것인지 
  live: true        // 새로 추가되는 요소 확인하여 동작 
})
