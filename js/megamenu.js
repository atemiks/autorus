$(function () {
    let megamenuToggle = $('.header-catalog-toggle'),
        megamenuContainer = $('#megamenu'),
        megamenuChildren = $(megamenuContainer).find('.megamenu-nav-item');

    function openOffcanvasCatalog() {
        openOffcanvas();
    }

    function closeOffcanvasCatalog() {
        closeOffcanvas();
    }

    function openMegamenu() {
        $('body').addClass('megamenu-open');
        $(megamenuToggle).addClass('is-active');
        $(megamenuContainer).addClass('is-animate is-open');
    }

    function closeMegamenu() {
        $('body').removeClass('megamenu-open');
        $(megamenuToggle).removeClass('is-active');
        $(megamenuContainer).removeClass('is-open');
    }

    $(megamenuToggle).on('click', function() {
        if(windowSizeHelper.isMobile()) {
            openOffcanvas();
        } else {
            if(!$(megamenuToggle).hasClass('is-active')) {
                openMegamenu();
            } else {
                closeMegamenu();
            }
        }
    });

    $(megamenuChildren).on('mouseover', function(e) {
        let target = $(e.currentTarget);

        $(megamenuChildren).removeClass('is-hover');
        $(target).addClass('is-hover');
    })
})