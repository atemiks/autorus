let headerSearchButton = $('.header-search-toggle'),
    offcanvasSearchInput = $('.offcanvas-search-block').find('.form-search-input');

function openOffcanvasSearch() {
    openOffcanvas();

    setTimeout(function() {
        $(offcanvasSearchInput).focus();
    }, 400);
}

$(headerSearchButton).on('click', openOffcanvasSearch)