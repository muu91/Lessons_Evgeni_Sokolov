
// ========================================
// ---------- VARIABLES ----------
let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- HEADER -----
const bl_lesson_8 = new Swiper('.bl_lesson__slide8', {
  loop: false,
  slidesPerView: 1,
  // spaceBetween: 3000,
  // effect: "fade",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  slidesPerGroup: 1,
  allowTouchMove: false,
  on: {
    slideChangeTransitionStart: function () {
      // ----------------------------------------
      // ----- SLIDE 1-10 -----
      // $('.blue_blocks__item_active ').delay(200).hide(0);
      // $('.blue_blocks__item_active ').removeClass('aos-init').removeClass('aos-animate');
      // ----- END SLIDE 1-10 -----
      // ----------------------------------------
    },
    slideChangeTransitionEnd: function () {
      // ----------------------------------------
      // ----- SLIDE 1-10 -----
      // $('.blue_blocks__item_active').show(0);
      // ----- END SLIDE 1-10 -----
      // ----------------------------------------
      // AOS.init();
      // ----------------------------------------
      // ----- BTNS RIGHT -----
      $('.btn_right').css('pointer-events', 'none')
      setTimeout(function () {
        $('.swiper-slide-active').find('.btn_right').css('pointer-events', 'all')
      }, 1800);
      // ----- END BTNS RIGHT -----
      // ----------------------------------------
    },
  }
});


// ----------------------------------------
// ---------- SLIDE 26-31 ----------

// const swiper_slide = document.querySelectorAll('.bl_lesson_1 .swiper-wrapper .swiper-slide');


// Автоскролл в следующий слайд
// const lesson1_31 = document.getElementById('lesson1_31');
// const lesson1_31_index = Array.from(swiper_slide).indexOf(lesson1_31);

// bl_lesson_1.on("slideChange", function () {
//   if (this.activeIndex == lesson1_31_index - 1) {
//     setTimeout(function () {
//       bl_lesson_1.slideNext();
//     }, 5000);
//   }
// });

// const swiper_slide7 = document.querySelectorAll('.bl_lesson_7 .swiper-wrapper .swiper-slide');

// const lesson7_16 = document.getElementById('lesson7_16');
// const lesson7_18 = document.getElementById('lesson7_18');
// const lesson7_21 = document.getElementById('lesson7_21');

// const lesson7_16_index = Array.from(swiper_slide7).indexOf(lesson7_16);
// const lesson7_18_index = Array.from(swiper_slide7).indexOf(lesson7_18);
// const lesson7_21_index = Array.from(swiper_slide7).indexOf(lesson7_21);

// const btn_go_to16 = document.querySelector('.btn_go_to16');
// const btn_go_to18 = document.querySelector('.btn_go_to18');
// const btn_go_to21 = document.querySelector('.btn_go_to21');

// btn_go_to16.addEventListener('click', () => {
//   bl_lesson_7.slideTo(15);
// });
// btn_go_to18.addEventListener('click', () => {
//   bl_lesson_7.slideTo(17);
// });
// btn_go_to21.addEventListener('click', () => {
//   bl_lesson_7.slideTo(20);
// });
// ---------- END SLIDE 26-31 ----------
// ----------------------------------------
// ---------- END INDEX ----------
// ========================================