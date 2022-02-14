
// ========================================

// ---------- VARIABLES ----------
let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- HEADER -----
let bl_lesson_1 = new Swiper('.bl_lesson_1', {
  loop: false,
  slidesPerView: 1,
  // spaceBetween: 3000,
  // effect: "fade",
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  slidesPerGroup: 1,
  allowTouchMove: false,
  on: {
    slideChangeTransitionStart: function () {
      //     // $('.left_texts .zoom-in-right__p').delay(200).hide(0);
      //     // $('.left_texts .zoom-in-right__p').removeClass('aos-init').removeClass('aos-animate');
      //     // ----------------------------------------
      //     // ----- SLIDE 1-10 -----
      //     // $('.blue_blocks__item_active ').delay(200).hide(0);
      //     // $('.blue_blocks__item_active ').removeClass('aos-init').removeClass('aos-animate');
      //     // ----- END SLIDE 1-10 -----
      //     // ----------------------------------------
      //     // ----- SLIDE 31-32 -----
      $('.two_block__item__active ').delay(200).hide(0);
      $('.two_block__item__active ').removeClass('aos-init').removeClass('aos-animate');
      $('.cups__item ').delay(200).hide(0);
      $('.cups__item ').removeClass('aos-init').removeClass('aos-animate');

      //     // ----- END SLIDE 31-32 -----
      //     // ----------------------------------------
    },
    slideChangeTransitionEnd: function () {
      //   // $('.left_texts p').delay(0).show(0);
      //   // AOS.init();
      //   // ----------------------------------------
      //   // ----- SLIDE 1-10 -----
      //   // $('.blue_blocks__item_active').show(0);
      //   // ----- END SLIDE 1-10 -----
      //   // ----------------------------------------
      //   // ----- SLIDE 31-32 -----
      $('.two_block__item__active ').show(0);
      $('.cups__item ').show(0);
      //   // ----- END SLIDE 31-32 -----
      // ----------------------------------------
      AOS.init();
      // ----------------------------------------
      // ----- BTNS -----
      // $('.btn_right').css('pointer-events', 'none')
      // setTimeout(function () {
      //   $('.swiper-slide-active').find('.btn_right').css('pointer-events', 'all')
      // }, 2000);

      $('.swiper-slide').find('.btn_right').css({ 'pointer-events': 'none', 'background-color': '#e1dfda' });
      $('.swiper-slide').each(function () {
        setTimeout(function () {
          $('.swiper-slide-active').find('.btn_right').css({ 'pointer-events': 'all', 'background-color': '#6baa3c' });
        }, 2000);
      })
      // ----- END BTNS -----
      // ----------------------------------------
    },
  }
});

// ----------------------------------------
// ---------- SLIDE 26 ----------

let conversion__center = document.querySelectorAll('.conversion__center');
let conversion__center_l = conversion__center.length;

conversion__center[0].addEventListener('click', () => {
  const d_none = document.querySelectorAll('.conversions__items .d-none');
  const d_none_l = d_none.length;
  if (d_none_l <= 1) {
    setTimeout(function () {
      bl_lesson_1.slideNext();
    }, 2000);
  }
});
conversion__center[1].addEventListener('click', () => {
  const d_none = document.querySelectorAll('.conversions__items .d-none');
  const d_none_l = d_none.length;
  if (d_none_l <= 1) {
    setTimeout(function () {
      bl_lesson_1.slideNext();
    }, 2000);
  }
});
conversion__center[2].addEventListener('click', () => {
  const d_none = document.querySelectorAll('.conversions__items .d-none');
  const d_none_l = d_none.length;
  if (d_none_l <= 1) {
    setTimeout(function () {
      bl_lesson_1.slideNext();
    }, 2000);
  }
});
conversion__center[3].addEventListener('click', () => {
  const d_none = document.querySelectorAll('.conversions__items .d-none');
  const d_none_l = d_none.length;
  if (d_none_l <= 1) {
    setTimeout(function () {
      bl_lesson_1.slideNext();
    }, 2000);
  }
});
// ---------- END SLIDE 26 ----------
// ----------------------------------------
// ---------- SLIDE BTN PREV ----------

const btn_go_7to5 = document.querySelector('#lesson1_7 .swiper-button-prev');
const btn_go_32to30 = document.querySelector('#lesson1_32 .swiper-button-prev');


btn_go_7to5.addEventListener('click', () => {
  bl_lesson_1.slideTo(4);
});
btn_go_32to30.addEventListener('click', () => {
  bl_lesson_1.slideTo(18);
});

const btn_go_1to30 = document.querySelector('#lesson1_1 .swiper-button-next');
btn_go_1to30.addEventListener('click', () => {
  bl_lesson_1.slideTo(9);
});

// ---------- END SLIDE BTN PREV ----------
// ----------------------------------------
// ---------- SLIDE 26-31 ----------

// const swiper_slide = document.querySelectorAll('.bl_lesson_1 .swiper-wrapper .swiper-slide');

// const lesson1_27 = document.getElementById('lesson1_27');
// const lesson1_28 = document.getElementById('lesson1_28');
// const lesson1_29 = document.getElementById('lesson1_29');
// const lesson1_30 = document.getElementById('lesson1_30');

// const lesson1_27_index = Array.from(swiper_slide).indexOf(lesson1_27);
// const lesson1_28_index = Array.from(swiper_slide).indexOf(lesson1_28);
// const lesson1_29_index = Array.from(swiper_slide).indexOf(lesson1_29);
// const lesson1_30_index = Array.from(swiper_slide).indexOf(lesson1_30);

// const btn_to_27 = document.querySelectorAll('.slide_to_27');
// const btn_to_28 = document.querySelectorAll('.slide_to_28');
// const btn_to_29 = document.querySelectorAll('.slide_to_29');
// const btn_to_30 = document.querySelectorAll('.slide_to_30');

// console.log(btn_to_30.length)

// btn_to_27[0].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_27_index);
// });
// btn_to_27[1].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_27_index);
// });
// btn_to_27[2].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_27_index);
// });
// btn_to_27[3].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_27_index);
// });
// btn_to_27[4].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_27_index);
// });

// btn_to_28[0].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_28_index);
// });
// btn_to_28[1].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_28_index);
// });
// btn_to_28[2].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_28_index);
// });
// btn_to_28[3].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_28_index);
// });
// btn_to_28[4].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_28_index);
// });


// btn_to_29[0].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_29_index);
// });
// btn_to_29[1].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_29_index);
// });
// btn_to_29[2].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_29_index);
// });
// btn_to_29[3].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_29_index);
// });
// btn_to_29[4].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_29_index);
// });

// btn_to_30[0].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_30_index);
// });
// btn_to_30[1].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_30_index);
// });
// btn_to_30[2].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_30_index);
// });
// btn_to_30[3].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_30_index);
// });
// btn_to_30[4].addEventListener('click', () => {
//   bl_lesson_1.slideTo(lesson1_30_index);
// });

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
// AOS.init();

// ----- END HEADER -----
// ----- BRANCHES -----
// const swiper_bl_branches = new Swiper('.bl_branches__swiper', {
//   loop: false,
//   slidesPerView: 3,
//   // spaceBetween: 3000,
//   // effect: "fade",
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   speed: 800,
//   spaceBetween: 30,
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true
//   },
//   breakpoints: {
//     320: {
//       // slidesPerView: 'auto',
//       spaceBetween: 10,
//     },
//     // 500: {
//     //   // slidesPerView: 3,
//     //   spaceBetween: 10,

//     // },
//     1024: {
//       spaceBetween: 20,

//     },
//     1200: {
//       spaceBetween: 30,
//     },
//   },
// });
// ----- END BRANCHES -----
// ----------------------------------------
// ---------- END INDEX ----------
// ========================================