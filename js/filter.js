$(function () {
    /* filter group */
    $('.filter-group-title').on('click', function(e) {
        let target = e.currentTarget,
            groupContainer = target.closest('.filter-group'),
            groupContent = $(groupContainer).find('.filter-group-content');

        /* disable car group collapse at 480px + */
        if($(groupContainer).hasClass('filter-group-car') && !windowSizeHelper.isPhone()) {
            return;
        }

        $(target).toggleClass('active');
        $(groupContent).slideToggle();
    });


    /* filter categories */
    $('.filter-subcategories-secondary-toggle').on('click', function(e) {
        let target = $(e.currentTarget),
            subcategoriesContainer = $(target).closest('.filter-subcategories-dropdown'),
            subcategoriesSecondaryElements = $(subcategoriesContainer).find('.filter-subcategory-item-secondary');
        
        if($(target).hasClass('active')) {
            $(target).removeClass('active');
            $(target)[0].textContent = $(target).attr('data-full-text');
        } else {
            $(target).addClass('active');
            $(target)[0].textContent = $(target).attr('data-short-text');
        }

        $(subcategoriesSecondaryElements).slideToggle();
    });
})