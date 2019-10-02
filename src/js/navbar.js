(function($) {
    "use strict"
    $(function() {

        function hideDropdown(level) {
            $('._navbar-menu[data-level="' + level + '"]').hide()
            $('.navbar__dropdown.is--' + level).hide()
        }

        function showDropdown(menu, level, item) {
            hideDropdown(level)

            $('.navbar__dropdown.is--' + level).show()
            $(menu).show()
            // $('._navbar-menu.is--on li a, ._navbar-menu.is--tw li a').removeClass('is--active')
            // $(item).addClass('is--active')
        }

        $('._navbar-menu li a').hover(function() {

            var _this = $(this)

            var isDropdown = $(this).data('dropdown') || false

            if(isDropdown) {
                var dropdown = $('._navbar-menu[data-dropdown="' + isDropdown + '"]')
                var level = $(dropdown).data('level')
                showDropdown(dropdown, level, _this)
            }else {
                var currentLevel = $(this).parents('._navbar-menu').data('level')
                if(!currentLevel) hideDropdown('on')
                if(currentLevel == 'on') hideDropdown('tw')
            }

        }, function() {})

        $('.navbar').hover(function() {}, function() {
            hideDropdown('on')
            hideDropdown('tw')
        })

        $('.banner__carousel__items').slick({
            prevArrow: '',
            nextArrow: '',
            dots: true,
            autoplay: true
        })
        
    })
})(jQuery);