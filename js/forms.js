let initSelect2 = function () {
    $('.custom-select').select2({
        minimumResultsForSearch: Infinity,
    });

    $('.custom-select-inline').select2({
        width: 'auto',
        dropdownAutoWidth: true,
        minimumResultsForSearch: Infinity,
    });
}

let initTooltip = function () {
    $('[data-toggle="tooltip"]').tooltip()
}

document.addEventListener('DOMContentLoaded', function () {
    initSelect2();
    initTooltip();
});