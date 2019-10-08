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
(function($) {
    "use strict"
    $(function() {

        $('.news__menu__inner ul').slick({
            prevArrow: '.news__menu__navs button.is--prev',
            nextArrow: '.news__menu__navs button.is--next',
            variableWidth: true,
            infinite: false,
            slidesToScroll: 3,
            swipe: false
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
        
    })
})(jQuery);
function openOverlay() {
    document.body.classList.add("is--overlay");
}

function closeOverlay() {
    document.body.className = document.body.className.replace("is--overlay","");
    document.body.className = document.body.className.replace("is--t-menu","");
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyIsIm1haW4uanMiLCJtYXAuanMiLCJuYXZiYXIuanMiLCJvdmVybGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpO1xyXG5cclxuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmtzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgdGFyZ2V0RWwgPSBlLnRhcmdldDtcclxuICAgIHZhciBpbmtFbCA9IHRhcmdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2lyY2xlJyk7XHJcblxyXG4gICAgaWYgKGlua0VsKSB7XHJcbiAgICAgIGlua0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLS1hbmltYXRlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaW5rRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGlua0VsLmNsYXNzTGlzdC5hZGQoJ2luaycpO1xyXG4gICAgICBpbmtFbC5zdHlsZS53aWR0aCA9IGlua0VsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KHRhcmdldEVsLm9mZnNldFdpZHRoLCB0YXJnZXRFbC5vZmZzZXRIZWlnaHQpICsgJ3B4JztcclxuICAgICAgdGFyZ2V0RWwuYXBwZW5kQ2hpbGQoaW5rRWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlua0VsLnN0eWxlLmxlZnQgPSAoZS5vZmZzZXRYIC0gaW5rRWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICBpbmtFbC5zdHlsZS50b3AgPSAoZS5vZmZzZXRZIC0gaW5rRWwub2Zmc2V0SGVpZ2h0IC8gMikgKyAncHgnO1xyXG4gICAgaW5rRWwuY2xhc3NMaXN0LmFkZCgnaXMtLWFuaW1hdGUnKTtcclxuICB9LCBmYWxzZSk7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5uZXdzX19tZW51X19pbm5lciB1bCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLm5ld3NfX21lbnVfX25hdnMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLm5ld3NfX21lbnVfX25hdnMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgc3dpcGU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuZWR1X19saW5lX190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZWR1X19saW5lX19jb250ZW50Jykuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfSkgXHJcblxyXG4gICAgICAgICQoJy5lZHVfX2xpbmVfX2NvbnRlbnQnKS5zbGlkZVVwKClcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXRQYWRkaW5ncygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcuaXMtLWMtcGwnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnLmlzLS1jLXByJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDEwMFBlcjogJy5pcy0taDEwMCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWluZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJy5pcy0tYy1wdCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYWRkaW5ncygpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFBhZGRpbmdzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5jaG9yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIGFpZCA9IF90aGlzLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBpZighYWlkKSB7XHJcbiAgICAgICAgICAgICAgICBhaWQgPSBfdGhpcy5kYXRhKCd0YXJnZXQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhaWQpLm9mZnNldCgpLnRvcCAtICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpfSwnc2xvdycpO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcblxyXG4gICAgICAgIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbi1waG9uZScpO1xyXG5cclxuICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgIHBob25lSW5wdXRzLCB7XHJcbiAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgYWlkID0gX3RoaXMuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmKCFhaWQpIHtcclxuICAgICAgICAgICAgICAgIGFpZCA9IF90aGlzLmRhdGEoJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFpZCkub2Zmc2V0KCkudG9wIC0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsInltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcclxuICAgICAgICAgICAgY2VudGVyOiBbNTIuOTczNDU2LCAzNi4wODEwMzFdLFxyXG4gICAgICAgICAgICB6b29tOiAxNixcclxuICAgICAgICAgICAgY29udHJvbHM6IFtdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICAvLyDQodC+0LfQtNCw0ZHQvCDQvNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXHJcbiAgICAgICAgTXlJY29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhcclxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBteVBsYWNlbWFya1dpdGhDb250ZW50ID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTIuOTczNDU2LCAzNi4wODEwMzFdLCB7XHJcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiAn0JjQvdGB0YLQuNGC0YPRgiDRgNCw0LfQstC40YLQuNGPINC+0LHRgNCw0LfQvtCy0LDQvdC40Y8nLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cclxuICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXHJcbiAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxyXG4gICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL21hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMTAwLCAxMDBdLFxyXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgLy8g0LXRkSBcItC90L7QttC60LhcIiAo0YLQvtGH0LrQuCDQv9GA0LjQstGP0LfQutC4KS5cclxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTUwLCAtNTBdLFxyXG4gICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INGB0LvQvtGPINGBINGB0L7QtNC10YDQttC40LzRi9C8INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdC70L7RjyDRgSDQutCw0YDRgtC40L3QutC+0LkuXHJcbiAgICAgICAgICAgIGljb25Db250ZW50T2Zmc2V0OiBbMTUsIDE1XSxcclxuICAgICAgICAgICAgLy8g0JzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgICAgICBpY29uQ29udGVudExheW91dDogTXlJY29uQ29udGVudExheW91dFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzXHJcbiAgICAgICAgLmFkZChteVBsYWNlbWFya1dpdGhDb250ZW50KTtcclxufSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlRHJvcGRvd24obGV2ZWwpIHtcclxuICAgICAgICAgICAgJCgnLl9uYXZiYXItbWVudVtkYXRhLWxldmVsPVwiJyArIGxldmVsICsgJ1wiXScpLmhpZGUoKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19kcm9wZG93bi5pcy0tJyArIGxldmVsKS5oaWRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dEcm9wZG93bihtZW51LCBsZXZlbCwgaXRlbSkge1xyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24obGV2ZWwpXHJcblxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19kcm9wZG93bi5pcy0tJyArIGxldmVsKS5zaG93KClcclxuICAgICAgICAgICAgJChtZW51KS5zaG93KClcclxuICAgICAgICAgICAgLy8gJCgnLl9uYXZiYXItbWVudS5pcy0tb24gbGkgYSwgLl9uYXZiYXItbWVudS5pcy0tdHcgbGkgYScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgLy8gJChpdGVtKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuX25hdmJhci1tZW51IGxpIGEnKS5ob3ZlcihmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuXHJcbiAgICAgICAgICAgIHZhciBpc0Ryb3Bkb3duID0gJCh0aGlzKS5kYXRhKCdkcm9wZG93bicpIHx8IGZhbHNlXHJcblxyXG4gICAgICAgICAgICBpZihpc0Ryb3Bkb3duKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJvcGRvd24gPSAkKCcuX25hdmJhci1tZW51W2RhdGEtZHJvcGRvd249XCInICsgaXNEcm9wZG93biArICdcIl0nKVxyXG4gICAgICAgICAgICAgICAgdmFyIGxldmVsID0gJChkcm9wZG93bikuZGF0YSgnbGV2ZWwnKVxyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKGRyb3Bkb3duLCBsZXZlbCwgX3RoaXMpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50TGV2ZWwgPSAkKHRoaXMpLnBhcmVudHMoJy5fbmF2YmFyLW1lbnUnKS5kYXRhKCdsZXZlbCcpXHJcbiAgICAgICAgICAgICAgICBpZighY3VycmVudExldmVsKSBoaWRlRHJvcGRvd24oJ29uJylcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRMZXZlbCA9PSAnb24nKSBoaWRlRHJvcGRvd24oJ3R3JylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCBmdW5jdGlvbigpIHt9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyJykuaG92ZXIoZnVuY3Rpb24oKSB7fSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bignb24nKVxyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oJ3R3JylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYmFubmVyX19jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJycsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJycsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmJhbm5lcl9fbWNhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnJyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnJyxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXJfX2JvdHRvbV9fYnRuIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2lzLS1ibS1vcGVuJylcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkNhdGVnb3J5TU0oaWQpIHtcclxuICAgICAgICAgICAgJCgnLmFzaWRlX19zdWIgdWwuaXMtLW1lbnVbZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VDYXRlZ29yeU1NKCkge1xyXG4gICAgICAgICAgICAkKCcuYXNpZGUnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bC5pcy0tbWVudScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5hc2lkZV9fbWFpbl9fbWVudSB1bCBsaSBhLmlzLS1kcm9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgJCgnLmFzaWRlJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgb3BlbkNhdGVnb3J5TU0oJCh0aGlzKS5kYXRhKCdpZCcpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hc2lkZV9fc3ViIGJ1dHRvbi5pcy0tcHJldicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZUNhdGVnb3J5TU0oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hc2lkZV9fc3ViIHVsLmlzLS1tZW51IGxpIHVsJykuaGlkZSgpXHJcblxyXG4gICAgICAgICQoJy5hc2lkZV9fc3ViIHVsIGxpIGEuaXMtLWRyb3AnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ3VsJykuc2xpZGVUb2dnbGUoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy50LW1lbnVfX21vYmlsZSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tdC1tZW51JylcclxuICAgICAgICAgICAgb3Blbk92ZXJsYXkoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy50LW1lbnVfX2lubmVyIGJ1dHRvbi5pcy0tY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImlzLS1vdmVybGF5XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCJpcy0tb3ZlcmxheVwiLFwiXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwiaXMtLXQtbWVudVwiLFwiXCIpO1xyXG59Il19
