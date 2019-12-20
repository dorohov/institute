(function($) {
    "use strict"
    $(function() {

        function hideDropdown() {
            $('.navbar__dropdown').removeClass('is--open')
        }

        function showDropdown(level) {
            hideDropdown()

            $('.navbar__dropdown.is--l' + level).addClass('is--open')
        }

        $('._navbar-menu li a').hover(function() {

            var _this = $(this)

            hideDropdown()

            $('body').removeClass('is--bm-open')
            $('.navbar__bottom__btn button').removeClass('is--active')

            var isDropdown = $(_this).data('dropdown') || false

            if(isDropdown) {
                showDropdown(isDropdown)
            }
        }, function() {})

        $('.navbar').hover(function() {}, function() {
            hideDropdown()
        })

        $('.banner__carousel__items').slick({
            prevArrow: '',
            nextArrow: '',
            dots: true,
            autoplay: true
        })

        $('.banner__mcarousel__items').slick({
            prevArrow: '',
            nextArrow: '',
            dots: true,
            autoplay: true,
            slidesToShow: 1
        })

        $('.navbar__bottom__btn button').on('click', function() {
            $('body').toggleClass('is--bm-open')
            $(this).toggleClass('is--active')
        })

        function openCategoryMM(id) {
            $('.aside__sub ul.is--menu[data-id="' + id + '"]').css({
                display: 'block'
            })
        }

        function closeCategoryMM() {
            $('.aside').removeClass('is--open')
            $('.aside__sub ul.is--menu').css({
                display: 'none'
            })
        }

        $('.aside__main__menu ul li a.is--drop').on('click', function(e) {
            e.preventDefault()
            $('.aside').addClass('is--open')
            openCategoryMM($(this).data('id'))
        })

        $('.aside__sub button.is--prev').on('click', function() {
            closeCategoryMM()
        })

        $('.aside__sub ul.is--menu li ul').hide()

        $('.aside__sub ul li a.is--drop').on('click', function(e) {
            e.preventDefault()
            $(this).toggleClass('is--open')
            $(this).siblings('ul').slideToggle()
        })

        $('.t-menu__mobile button').on('click', function() {
            $('body').addClass('is--t-menu')
            openOverlay()
        })

        $('.t-menu__inner button.is--close').on('click', function() {
            closeOverlay()
        })
        
        var lastScrollTop = 0

        $(document).scroll(function(e) {
            var st = $(this).scrollTop()
            if (st > lastScrollTop) {
                if(st > 200 && $('body').innerWidth() > 1080) {
                    $('.navbar').addClass('is--scroll')
                    $('body').removeClass('is--bm-open')
                    $('.navbar__bottom__btn button').removeClass('is--active')
                }
            } else {
                $('.navbar').removeClass('is--scroll')
            }
            lastScrollTop = st
        })
        
    })
})(jQuery);