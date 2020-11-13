$(function () {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();

    $('#close-modal').click(() => {
        $.fancybox.close()
    })

    $('.header__btn-menu').click(() => {
        $('.menu ul').slideToggle();
    })

});