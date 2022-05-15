let offcanvasContainer = $('#offcanvas'),
    offcanvasCloseButton = offcanvasContainer.find('.offcanvas-close-toggle'),
    offcanvasOpenButton = $('.header-offcanvas-toggle');

function openOffcanvas() {
    $('body').addClass('megamenu-open');
    $('#backdrop').addClass('is-visible');
    offcanvasContainer.addClass('is-animate is-open');
}

function closeOffcanvas() {
    $('body').removeClass('megamenu-open');
    $('#backdrop').removeClass('is-visible');
    offcanvasContainer.removeClass('is-open');
}

$(function () {
    $(offcanvasOpenButton).on('click', openOffcanvas);
    $(offcanvasCloseButton).on('click', closeOffcanvas);

    // $(document).on('click', '.backdrop', closeOffcanvas);

    // /* offcanvas dropdown catalog */
    // $('.offcanvas-catalog-megamenu-toggle').on('click', function(e) {
    //     let target = $(e.currentTarget);

    //     target.toggleClass('active');
    //     target.next().slideToggle();
    // });
});

beforeWindowWidthResizeFunctions.push(function () {
    if (windowSizeHelper.isMobileToDesktopResize()) {
        closeOffcanvas();
    }
});

document.addEventListener('DOMContentLoaded', function (){
    $(document).on('click', '#backdrop', closeOffcanvas);
})