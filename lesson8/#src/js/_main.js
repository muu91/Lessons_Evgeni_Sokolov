// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- AOS -----
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// ----- END AOS -----
// ----------------------------------------
// ----- SLIDE 1-6 ЭФФЕКТ БЫСТРОЙ ПЕЧАТИ -----

// let txt_slide_1_6 = new Typed('#text_slide_1-6-1', {
//   strings: [
//     '',
//     'Вода – это основа всего живого на нашей планете. <br> <br> Вода нужна и растениям, и животным и людям.',
//   ],
//   // stringsElement: '#text_slide_1-6-2',
//   startDelay: 0,
//   typeSpeed: 60,
//   backSpeed: 0,
//   backDelay: 5000,
//   loop: false,
//   showCursor: false,
//   shuffle: false,
// });
// ----- END SLIDE 1-6 ЭФФЕКТ БЫСТРОЙ ПЕЧАТИ -----
// ----------------------------------------
// ----- SLIDE 1-7 -----
// let txt_slide_1_7 = new Typed('#text_slide_1-7', {
//   strings: [
//     '',
//     'Да, в целом, воды достаточно много – поверхность всех морей и океанов в два раза больше поверхности суши.',
//   ],
//   // stringsElement: '#text_slide_1-6-2',
//   startDelay: 0,
//   typeSpeed: 60,
//   backSpeed: 0,
//   backDelay: 5000,
//   loop: false,
//   showCursor: false,
//   shuffle: false,
// });
// ----- END SLIDE 1-7 -----
// ----------------------------------------
// ----- SLIDE 1-8 -----

// let txt_slide_1_8 = new Typed('#text_slide_1-8', {
//   strings: [
//     '',
//     'Но основная масса воды на Земле – соленая морская и океанская вода, а для поддержания жизни растений, животных и человека нужна вода пресная.',
//   ],
//   // startDelay: 0,
//   // typeSpeed: 60,
//   // backSpeed: 0,
//   // loop: false,
//   // showCursor: false,
//   // restart(true),
//   typeSpeed: 20,
//   backSpeed: 20,
//   startDelay: 1000,
//   loop: false,
//   loopCount: Infinity,
//   onReset: function (self) {
//     prettyLog('onReset ' + self);
//   },
// });

// document.querySelector('.swiper-button-next').addEventListener('click', function () {
//   txt_slide_1_8.reset();
//   // txt_slide_1_8.restart(true = nser);
// });

// $('document').ready(function () {


// });

// var typed = new Typed('#text_slide_1-8', {
//   // stringsElement: '#text_slide_1-8',
//   strings: [
//     '',
//     'Но основная масса воды на Земле – соленая морская и океанская вода, а для поддержания жизни растений, животных и человека нужна вода пресная.',
//   ],
//   startDelay: 0,
//   typeSpeed: 60,
//   backSpeed: 0,
//   loop: false,
//   showCursor: false,

// });

// if ($('#lesson1_8').hasClass('swiper-slide-active')) {
// }
// document.querySelector('.swiper-button-next').addEventListener('click', function () {
//   typed.reset();
// });


// ----- END SLIDE 1-8 -----
// ----------------------------------------
// ----- END SLIDE 1-9 -----
// let txt_slide_1_9 = new Typed('#text_slide_1-9', {
//   strings: [
//     '',
//     'А такой воды всего 1% и каждый 3 человек на планете испытывает жажду.',
//   ],
//   // stringsElement: '#text_slide_1-6-2',
//   startDelay: 0,
//   typeSpeed: 60,
//   backSpeed: 0,
//   backDelay: 5000,
//   loop: false,
//   showCursor: false,
//   shuffle: false,
// });


// ----- END SLIDE 1-9 -----
// ----------------------------------------

// ----------------------------------------
// ---------- END INDEX ----------
// ========================================