$(function () {
    $('.swiper-featured-products').each(function (_, container) {
        let jContainer = $(container),
            slides = $(jContainer).find('.swiper-slide'),
            prev = $(jContainer).find('.swiper-featured-products-button-prev'),
            next = $(jContainer).find('.swiper-featured-products-button-next');

        new Swiper(jContainer, {
            slidesPerView: 2,
            loop: slides.length > 2 ? true : false,
            observer: true,
            observeParents: true,
            breakpointsInverse: true,
            breakpoints: {
                // when window width is >= 750px
                750: {
                    slidesPerView: 3,
                    loop: slides.length > 3 ? true : false,
                },
            },

            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        });
    });

    $('.swiper-recently-viewed').each(function (_, container) {
        let jContainer = $(container),
            slides = $(jContainer).find('.swiper-slide'),
            prev = $(jContainer).find('.swiper-recently-viewed-button-prev'),
            next = $(jContainer).find('.swiper-recently-viewed-button-next');

        new Swiper(jContainer, {
            slidesPerView: 2,
            loop: slides.length > 2 ? true : false,
            observer: true,
            observeParents: true,
            breakpointsInverse: true,
            breakpoints: {
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    loop: slides.length > 3 ? true : false,
                },
                // when window width is >= 970px
                970: {
                    slidesPerView: 4,
                    loop: slides.length > 4 ? true : false,
                },
            },

            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        });
    });
})