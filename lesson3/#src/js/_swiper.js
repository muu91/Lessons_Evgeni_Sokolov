
// ========================================
// ---------- VARIABLES ----------
let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- HEADER -----
const bl_lesson_1 = new Swiper('.bl_lesson_3', {
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
// ---------- END SLIDE 26-31 ----------
// ----------------------------------------
// ---------- END INDEX ----------
// ========================================