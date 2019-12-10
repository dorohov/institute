var links = document.querySelectorAll('.btn');

for (var i = 0, len = links.length; i < len; i++) {
  links[i].addEventListener('click', function(e) {
    var targetEl = e.target;
    var inkEl = targetEl.querySelector('.btn-circle');

    if (inkEl) {
      inkEl.classList.remove('is--animate');
    }
    else {
      inkEl = document.createElement('span');
      inkEl.classList.add('ink');
      inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
      targetEl.appendChild(inkEl);
    }

    inkEl.style.left = (e.offsetX - inkEl.offsetWidth / 2) + 'px';
    inkEl.style.top = (e.offsetY - inkEl.offsetHeight / 2) + 'px';
    inkEl.classList.add('is--animate');
  }, false);
}
function setDefaultMode() {
    $('#eyestyles').remove()
    localStorage.setItem('mode', 'normal')
    $('.navbar__top__eye button span').html('Для слабовидящих')
}

function setEyeMode() {
    $('head').append('<link rel="stylesheet" href="dist/css/eye.css" id="eyestyles">')
    localStorage.setItem('mode', 'eye')
    $('.navbar__top__eye button span').html('Отключить')
}

function changeMode() {
    var currentMode = localStorage.getItem('mode')

    if(currentMode == 'normal') {
        setEyeMode();
    }else {
        setDefaultMode();
    }
}

var _currentMode = localStorage.getItem('mode')

if(_currentMode == 'normal') {
    setDefaultMode();
}else {
    setEyeMode();
}
(function($) {
    "use strict"
    $(function() {


        var phoneInputs = document.getElementsByClassName('in-phone');

        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }


        $('form').parsley()

        $('.news__menu__inner ul').slick({
            prevArrow: '.news__menu__navs button.is--prev',
            nextArrow: '.news__menu__navs button.is--next',
            variableWidth: true,
            infinite: false,
            slidesToScroll: 3,
            swipe: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 1,
                    }
                }
            ]
        })

        $('#overlay').on('click', function() {
            closeOverlay()
        })

        $('.edu__line__title').on('click', function() {
            $(this).siblings('.edu__line__content').slideToggle()
            $(this).toggleClass('is--open')
        }) 

        $('.edu__line__content').slideUp()
        
        function setPaddings() {

            var classes = {
                paddingLeft: '.is--c-pl',
                paddingRight: '.is--c-pr',
                height100Per: '.is--h100'
            }

            var padding = document.getElementsByClassName('container')[0].getBoundingClientRect()
            var height = $('.navbar').innerHeight() + $('.footer').innerHeight()

            $(classes.paddingLeft).css({
                paddingLeft: padding.left + 30
            })
            $(classes.paddingRight).css({
                paddingRight: padding.left + 30
            })
            $(classes.height100Per).css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })
            $('.is--c-pt').css({
                paddingTop: $('.navbar').innerHeight()
            })
            $('main').css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })

            $('body').css({
                paddingTop: $('.navbar').innerHeight()
            })

        }

        setPaddings()

        $(window).resize(function() {
            setPaddings()
        })

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var _this = $(this)
            var aid = _this.attr("href");
            if(!aid) {
                aid = _this.data('target')
            }
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
        })


        $('form').parsley()

        var phoneInputs = document.getElementById('in-phone');

        new IMask(
            phoneInputs, {
            mask: '+{7}(900)000-00-00'
        });

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var _this = $(this)
            var aid = _this.attr("href");
            if(!aid) {
                aid = _this.data('target')
            }
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
        })

        
    })
})(jQuery);
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [52.973456, 36.081031],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([52.973456, 36.081031], {
            balloonContent: 'Институт развития образования',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.svg',
            // Размеры метки.
            iconImageSize: [100, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -50],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects
        .add(myPlacemarkWithContent);
});
function openModal(modalID) {
    $(modalID).modal({
        fadeDuration: 100,
        showClose: false,
    })
}

(function($) {
    "use strict"
    $(function() {

        $.modal.fadeDuration = 100
        $.modal.showClose = false

        $('a.modal-open').on('click', function(e) {
            e.preventDefault()
            var thisModalId = $(this).attr('href')
            openModal(thisModalId)
            return false;
        })

        // openModal('#modal_form')
        // openModal('#modal_success')

    })
})(jQuery);
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
function openOverlay() {
    document.body.classList.add("is--overlay");
}

function closeOverlay() {
    document.body.className = document.body.className.replace("is--overlay","");
    document.body.className = document.body.className.replace("is--t-menu","");
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyIsImV5ZS5qcyIsIm1haW4uanMiLCJtYXAuanMiLCJtb2RhbC5qcyIsIm5hdmJhci5qcyIsIm92ZXJsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpO1xyXG5cclxuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmtzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgdGFyZ2V0RWwgPSBlLnRhcmdldDtcclxuICAgIHZhciBpbmtFbCA9IHRhcmdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2lyY2xlJyk7XHJcblxyXG4gICAgaWYgKGlua0VsKSB7XHJcbiAgICAgIGlua0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLS1hbmltYXRlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaW5rRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGlua0VsLmNsYXNzTGlzdC5hZGQoJ2luaycpO1xyXG4gICAgICBpbmtFbC5zdHlsZS53aWR0aCA9IGlua0VsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KHRhcmdldEVsLm9mZnNldFdpZHRoLCB0YXJnZXRFbC5vZmZzZXRIZWlnaHQpICsgJ3B4JztcclxuICAgICAgdGFyZ2V0RWwuYXBwZW5kQ2hpbGQoaW5rRWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlua0VsLnN0eWxlLmxlZnQgPSAoZS5vZmZzZXRYIC0gaW5rRWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICBpbmtFbC5zdHlsZS50b3AgPSAoZS5vZmZzZXRZIC0gaW5rRWwub2Zmc2V0SGVpZ2h0IC8gMikgKyAncHgnO1xyXG4gICAgaW5rRWwuY2xhc3NMaXN0LmFkZCgnaXMtLWFuaW1hdGUnKTtcclxuICB9LCBmYWxzZSk7XHJcbn0iLCJmdW5jdGlvbiBzZXREZWZhdWx0TW9kZSgpIHtcclxuICAgICQoJyNleWVzdHlsZXMnKS5yZW1vdmUoKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZGUnLCAnbm9ybWFsJylcclxuICAgICQoJy5uYXZiYXJfX3RvcF9fZXllIGJ1dHRvbiBzcGFuJykuaHRtbCgn0JTQu9GPINGB0LvQsNCx0L7QstC40LTRj9GJ0LjRhScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEV5ZU1vZGUoKSB7XHJcbiAgICAkKCdoZWFkJykuYXBwZW5kKCc8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImRpc3QvY3NzL2V5ZS5jc3NcIiBpZD1cImV5ZXN0eWxlc1wiPicpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kZScsICdleWUnKVxyXG4gICAgJCgnLm5hdmJhcl9fdG9wX19leWUgYnV0dG9uIHNwYW4nKS5odG1sKCfQntGC0LrQu9GO0YfQuNGC0YwnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VNb2RlKCkge1xyXG4gICAgdmFyIGN1cnJlbnRNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKVxyXG5cclxuICAgIGlmKGN1cnJlbnRNb2RlID09ICdub3JtYWwnKSB7XHJcbiAgICAgICAgc2V0RXllTW9kZSgpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHNldERlZmF1bHRNb2RlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBfY3VycmVudE1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kZScpXHJcblxyXG5pZihfY3VycmVudE1vZGUgPT0gJ25vcm1hbCcpIHtcclxuICAgIHNldERlZmF1bHRNb2RlKCk7XHJcbn1lbHNlIHtcclxuICAgIHNldEV5ZU1vZGUoKTtcclxufSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luLXBob25lJyk7XHJcblxyXG4gICAgICAgIGlmKHBob25lSW5wdXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ldyBJTWFzayhcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZUlucHV0c1tpXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICQoJ2Zvcm0nKS5wYXJzbGV5KClcclxuXHJcbiAgICAgICAgJCgnLm5ld3NfX21lbnVfX2lubmVyIHVsJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcubmV3c19fbWVudV9fbmF2cyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcubmV3c19fbWVudV9fbmF2cyBidXR0b24uaXMtLW5leHQnLFxyXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuZWR1X19saW5lX190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZWR1X19saW5lX19jb250ZW50Jykuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSkgXHJcblxyXG4gICAgICAgICQoJy5lZHVfX2xpbmVfX2NvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXRQYWRkaW5ncygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcuaXMtLWMtcGwnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnLmlzLS1jLXByJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDEwMFBlcjogJy5pcy0taDEwMCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWluZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJy5pcy0tYy1wdCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYWRkaW5ncygpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFBhZGRpbmdzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5jaG9yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIGFpZCA9IF90aGlzLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBpZighYWlkKSB7XHJcbiAgICAgICAgICAgICAgICBhaWQgPSBfdGhpcy5kYXRhKCd0YXJnZXQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhaWQpLm9mZnNldCgpLnRvcCAtICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpfSwnc2xvdycpO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcblxyXG4gICAgICAgIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbi1waG9uZScpO1xyXG5cclxuICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgIHBob25lSW5wdXRzLCB7XHJcbiAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgYWlkID0gX3RoaXMuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmKCFhaWQpIHtcclxuICAgICAgICAgICAgICAgIGFpZCA9IF90aGlzLmRhdGEoJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFpZCkub2Zmc2V0KCkudG9wIC0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsInltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgICAgICAgICAgY2VudGVyOiBbNTIuOTczNDU2LCAzNi4wODEwMzFdLFxyXG4gICAgICAgICAgICB6b29tOiAxNixcclxuICAgICAgICAgICAgY29udHJvbHM6IFtdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICAvLyDQodC+0LfQtNCw0ZHQvCDQvNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXHJcbiAgICAgICAgTXlJY29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhcclxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBteVBsYWNlbWFya1dpdGhDb250ZW50ID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTIuOTczNDU2LCAzNi4wODEwMzFdLCB7XHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0JjQvdGB0YLQuNGC0YPRgiDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvtCy0LDQvdC40Y8nLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cclxuICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXHJcbiAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxyXG4gICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL21hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMTAwLCAxMDBdLFxyXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cclxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTUwLCAtNTBdLFxyXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INGB0LvQvtGPINGBINGB0L7QtNC10YDQttC40LzRi9C8INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdC70L7RjyDRgSDQutCw0YDRgtC40L3QutC+0LkuXHJcbiAgICAgICAgICAgIGljb25Db250ZW50T2Zmc2V0OiBbMTUsIDE1XSxcclxuICAgICAgICAgICAgLy8g0JzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgICAgICBpY29uQ29udGVudExheW91dDogTXlJY29uQ29udGVudExheW91dFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzXHJcbiAgICAgICAgLmFkZChteVBsYWNlbWFya1dpdGhDb250ZW50KTtcclxufSk7IiwiZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsSUQpIHtcclxuICAgICQobW9kYWxJRCkubW9kYWwoe1xyXG4gICAgICAgIGZhZGVEdXJhdGlvbjogMTAwLFxyXG4gICAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICB9KVxyXG59XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQubW9kYWwuZmFkZUR1cmF0aW9uID0gMTAwXHJcbiAgICAgICAgJC5tb2RhbC5zaG93Q2xvc2UgPSBmYWxzZVxyXG5cclxuICAgICAgICAkKCdhLm1vZGFsLW9wZW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB2YXIgdGhpc01vZGFsSWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxyXG4gICAgICAgICAgICBvcGVuTW9kYWwodGhpc01vZGFsSWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBvcGVuTW9kYWwoJyNtb2RhbF9mb3JtJylcclxuICAgICAgICAvLyBvcGVuTW9kYWwoJyNtb2RhbF9zdWNjZXNzJylcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZURyb3Bkb3duKGxldmVsKSB7XHJcbiAgICAgICAgICAgICQoJy5fbmF2YmFyLW1lbnVbZGF0YS1sZXZlbD1cIicgKyBsZXZlbCArICdcIl0nKS5oaWRlKClcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd24uaXMtLScgKyBsZXZlbCkuaGlkZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93RHJvcGRvd24obWVudSwgbGV2ZWwsIGl0ZW0pIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKGxldmVsKVxyXG5cclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd24uaXMtLScgKyBsZXZlbCkuc2hvdygpXHJcbiAgICAgICAgICAgICQobWVudSkuc2hvdygpXHJcbiAgICAgICAgICAgIC8vICQoJy5fbmF2YmFyLW1lbnUuaXMtLW9uIGxpIGEsIC5fbmF2YmFyLW1lbnUuaXMtLXR3IGxpIGEnKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIC8vICQoaXRlbSkuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLl9uYXZiYXItbWVudSBsaSBhJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcblxyXG4gICAgICAgICAgICB2YXIgaXNEcm9wZG93biA9ICQodGhpcykuZGF0YSgnZHJvcGRvd24nKSB8fCBmYWxzZVxyXG5cclxuICAgICAgICAgICAgaWYoaXNEcm9wZG93bikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duID0gJCgnLl9uYXZiYXItbWVudVtkYXRhLWRyb3Bkb3duPVwiJyArIGlzRHJvcGRvd24gKyAnXCJdJylcclxuICAgICAgICAgICAgICAgIHZhciBsZXZlbCA9ICQoZHJvcGRvd24pLmRhdGEoJ2xldmVsJylcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bihkcm9wZG93biwgbGV2ZWwsIF90aGlzKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudExldmVsID0gJCh0aGlzKS5wYXJlbnRzKCcuX25hdmJhci1tZW51JykuZGF0YSgnbGV2ZWwnKVxyXG4gICAgICAgICAgICAgICAgaWYoIWN1cnJlbnRMZXZlbCkgaGlkZURyb3Bkb3duKCdvbicpXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50TGV2ZWwgPT0gJ29uJykgaGlkZURyb3Bkb3duKCd0dycpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7fSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcicpLmhvdmVyKGZ1bmN0aW9uKCkge30sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oJ29uJylcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCd0dycpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmJhbm5lcl9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5iYW5uZXJfX21jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJycsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJycsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19ib3R0b21fX2J0biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tYm0tb3BlbicpXHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5DYXRlZ29yeU1NKGlkKSB7XHJcbiAgICAgICAgICAgICQoJy5hc2lkZV9fc3ViIHVsLmlzLS1tZW51W2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQ2F0ZWdvcnlNTSgpIHtcclxuICAgICAgICAgICAgJCgnLmFzaWRlJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnLmFzaWRlX19zdWIgdWwuaXMtLW1lbnUnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX21haW5fX21lbnUgdWwgbGkgYS5pcy0tZHJvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICQoJy5hc2lkZScpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIG9wZW5DYXRlZ29yeU1NKCQodGhpcykuZGF0YSgnaWQnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiBidXR0b24uaXMtLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VDYXRlZ29yeU1NKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bC5pcy0tbWVudSBsaSB1bCcpLmhpZGUoKVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bCBsaSBhLmlzLS1kcm9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudC1tZW51X19tb2JpbGUgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLXQtbWVudScpXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudC1tZW51X19pbm5lciBidXR0b24uaXMtLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzdCA+IDIwMCAmJiAkKCdib2R5JykuaW5uZXJXaWR0aCgpID4gMTA4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tYm0tb3BlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdmJhcl9fYm90dG9tX19idG4gYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3RcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImlzLS1vdmVybGF5XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCJpcy0tb3ZlcmxheVwiLFwiXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwiaXMtLXQtbWVudVwiLFwiXCIpO1xyXG59Il19
