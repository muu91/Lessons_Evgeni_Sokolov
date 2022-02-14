
$(document).ready(function () {

    // ========================================
    // ---------- VARIABLES ----------
    let windowWidthJq = $(window).width();
    // ---------- END VARIABLES ----------
    // ========================================
    // ---------- INDEX ----------
    // ----------------------------------------
    // ----- LESSON 1-12 -----
    $('.btn_right12').click(function () {
        $("[data-anim=blue_blocks__item]").each(function () {
            let blue_blocks__item = $('[data-anim=blue_blocks__item]').length;
            if (blue_blocks__item <= 2) {
                $(this).next().attr('data-anim', 'blue_blocks__item');
            }
            if (blue_blocks__item > 1) {
                $('.btn_right12').hide();
            }
        });
    });
    $('#lesson1_12 .swiper-button-next, #lesson1_12 .swiper-button-prev').click(function () {
        $('.btn_right12').show();
        let blue_blocks__item = $('[data-anim=blue_blocks__item]').length;
        if (blue_blocks__item > 1) {
            $('[data-anim=blue_blocks__item]:not(:first)').attr('data-anim', '');
        }
    });
    // ----- END LESSON 1-12 -----
    // ----------------------------------------
    // ----- LESSON 1-18 -----
    $('.btn_right18').click(function () {
        $("[data-anim18=blue_blocks__item]").each(function () {
            var blue_blocks__item = $('[data-anim18=blue_blocks__item]').length;
            if (blue_blocks__item <= 2) {
                $(this).next().attr('data-anim18', 'blue_blocks__item');
            }
            if (blue_blocks__item > 1) {
                $('.btn_right18').hide();
            }
        });
    });
    $('#lesson1_18 .swiper-button-next, #lesson1_18 .swiper-button-prev').click(function () {
        $('.btn_right18').show();
        let blue_blocks__item = $('[data-anim18=blue_blocks__item]').length;
        if (blue_blocks__item > 1) {
            $('[data-anim18=blue_blocks__item]:not(:first)').attr('data-anim18', '');
        }
    });
    // ----- END LESSON 1-18 -----
    // ----------------------------------------
    // ----- LESSON 1-23 -----
    $('.btn_right23').click(function () {
        $("[data-anim23=blue_blocks__item]").each(function () {
            var blue_blocks__item = $('[data-anim23=blue_blocks__item]').length;
            if (blue_blocks__item <= 2) {
                $(this).next().attr('data-anim23', 'blue_blocks__item');
            }
            if (blue_blocks__item > 1) {
                $('.btn_right23').hide();
            }
        });
    });
    $('#lesson1_23 .swiper-button-next, #lesson1_23 .swiper-button-prev').click(function () {
        $('.btn_right23').show();
        let blue_blocks__item = $('[data-anim23=blue_blocks__item]').length;
        if (blue_blocks__item > 1) {
            $('[data-anim23=blue_blocks__item]:not(:first)').attr('data-anim23', '');
        }
    });
    // ----- END LESSON 1-23 -----
    // ----------------------------------------
    // ----- LESSON 1-32 -----
    $('.btn_right32').click(function () {
        $("[data-anim32=blue_blocks__item]").each(function () {
            var blue_blocks__item = $('[data-anim32=blue_blocks__item]').length;
            if (blue_blocks__item <= 1) {
                $(this).next().attr('data-anim32', 'blue_blocks__item');
            }
            if (blue_blocks__item > 0) {
                $('.btn_right32').hide();
            }
        });
    });
    $('#lesson1_32 .swiper-button-next, #lesson1_32 .swiper-button-prev').click(function () {
        $('.btn_right32').show();
        let blue_blocks__item = $('[data-anim32=blue_blocks__item]').length;
        if (blue_blocks__item > 0) {
            $('[data-anim32=blue_blocks__item]:not(:first)').attr('data-anim32', '');
        }
    });
    // ----- END LESSON 1-32 -----
    // ----------------------------------------
    // ----- LESSON 1-26 -----
    $('.conversion__center').click(function () {
        $('.when_click').hide();
        $(this).next().find('.conversion__right__body').removeClass('d-none');
        $(this).find('img').css('transform', 'rotate(190deg)');
    });

    // ----- END LESSON 1-26 -----
    // ----------------------------------------

    // ---------- END INDEX ----------
    // ========================================




    // ========================================
    // ---------- OTHER ----------
    // ----------------------------------------
    // ----- QUICK TEXTS -----
    let txt_slide_1_6 = new Typed('#text_slide_1-6', {
        strings: [
            '',
            'Вода – это основа всего живого на нашей планете. <br> <br> Вода нужна и растениям, и животным и людям.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_7 = new Typed('#text_slide_1-7', {
        strings: [
            '',
            'Да, в целом, воды достаточно много – поверхность всех морей и океанов в два раза больше поверхности суши.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_8 = new Typed('#text_slide_1-8', {
        strings: [
            '',
            'Но основная масса воды на Земле – соленая морская и океанская вода, а для поддержания жизни растений, животных и человека нужна вода пресная.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_9 = new Typed('#text_slide_1-9', {
        strings: [
            '',
            'А такой воды всего 1% и каждый 3 человек на планете испытывает жажду.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_13 = new Typed('#text_slide_1-13', {
        strings: [
            '',
            'Плотно закройте кран - капля за раз может слить до 200 литров за 24 часа.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_14 = new Typed('#text_slide_1-14', {
        strings: [
            '',
            'Потому, что при выработке электричества расходуются уголь, газ, нефть и вода, запасы которых не безграничны, а выбросы в атмосферу вредных веществ огромны',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_15 = new Typed('#text_slide_1-15', {
        strings: [
            '',
            'Жителям больших городов часто трудно дышать от смога. <br> <br> В результате сжигания топлива <br> и сокращения лесов на земле, <br> в атмосфере увеличивается <br> концентрация «парниковых газов», <br> а это ведет к потеплению и всеобщему изменению климата.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_20 = new Typed('#text_slide_1-20', {
        strings: [
            '',
            'Потому, что на создание любой вещи, которая есть у нас дома, использовалось очень много электроэнергии и воды, а еще топлива, чтобы довезти её с завода в магазин.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_25 = new Typed('#text_slide_1-25', {
        strings: [
            '',
            'Каждый день человечество производит несколько миллионов тонн мусора. Если его не утилизировать, через 20 лет вся планета превратится <br> в большую мусорную свалку. <br> <br> Но люди научились перерабатывать свой мусор - то есть делать из мусора полезные вещи. ',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------
    let txt_slide_1_33 = new Typed('#text_slide_1-33', {
        strings: [
            '',
            'Ты прошел вводный курс. <br> <br> Теперь можешь применить эти знания в своей жизни.',
        ],
        startDelay: 0,
        typeSpeed: 40,
        backSpeed: 0,
        loop: false,
        showCursor: false,
    });
    // ----------------------------------------



    $('.swiper-button-next, .swiper-button-prev').click(function () {
        if ($('#lesson1_6').hasClass('swiper-slide-active')) {
            txt_slide_1_6.reset();
        } else if ($('#lesson1_7').hasClass('swiper-slide-active')) {
            txt_slide_1_7.reset();
        } else if ($('#lesson1_8').hasClass('swiper-slide-active')) {
            txt_slide_1_8.reset();
        } else if ($('#lesson1_9').hasClass('swiper-slide-active')) {
            txt_slide_1_9.reset();
        } else if ($('#lesson1_13').hasClass('swiper-slide-active')) {
            txt_slide_1_13.reset();
        } else if ($('#lesson1_14').hasClass('swiper-slide-active')) {
            txt_slide_1_14.reset();
        } else if ($('#lesson1_15').hasClass('swiper-slide-active')) {
            txt_slide_1_15.reset();
        } else if ($('#lesson1_20').hasClass('swiper-slide-active')) {
            txt_slide_1_20.reset();
        } else if ($('#lesson1_25').hasClass('swiper-slide-active')) {
            txt_slide_1_25.reset();
        } else if ($('#lesson1_33').hasClass('swiper-slide-active')) {
            txt_slide_1_33.reset();
        }
    });
    // ----------------------------------------
    // ----- END QUICK TEXTS -----
    // ----------------------------------------

    // $(function () {
    //     setInterval(function () {
    //         let animationName = 'animate__animated animate__tada';
    //         let animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //         $('.bottom__img img').addClass(animationName).one(animationend, function () {
    //             $(this).removeClass(animationName);
    //         });
    //     }, 1000);
    // })
    // ----------------------------------------
    // ----- BTNS RIGHT -----
    setTimeout(function () {
        $('.swiper-slide-active').find('.btn_right').css({ 'pointer-events': 'all', 'background-color': '#6baa3c' });
    }, 2000);
    // if ($('.swiper-slide').hasClass('swiper-slide-active')) {
    // }



    // $('.swiper-button-next, .swiper-button-prev, .conversion__center ').click(function () {
    //     $('.swiper-slide').find('.btn_right').css({ 'pointer-events': 'none', 'background-color': '#e1dfda' });
    //     $('.swiper-slide').each(function () {
    //         setTimeout(function () {
    //             $('.swiper-slide-active').find('.btn_right').css({ 'pointer-events': 'all', 'background-color': '#6baa3c' });
    //         }, 2000);
    //     })

    //     if ($('#lesson1_32').hasClass('swiper-slide-active')) {
    //         setTimeout(function () {
    //             $('.swiper-slide-active').find('.btn_right').css({ 'pointer-events': 'all', 'background-color': '#6baa3c' });
    //         }, 2000);
    //     }
    // });
    // ----- END BTNS RIGHT -----
    // ----------------------------------------
    // ---------- END OTHER ----------
    // ========================================
});