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

if(_currentMode == 'eye') {
    setEyeMode();
}else {
    setDefaultMode();
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
                $('body').removeClass('is--bm-open')
                $('.navbar__bottom__btn button').removeClass('is--active')
                var dropdown = $('._navbar-menu[data-dropdown="' + isDropdown + '"]')
                var level = $(dropdown).data('level')
                showDropdown(dropdown, level, _this)
            }else {
                var currentLevel = $(this).parents('._navbar-menu').data('level')
                if(currentLevel == 'on') {
                    hideDropdown('tw')
                    hideDropdown('th')
                    hideDropdown('fo')
                    hideDropdown('fv')
                }else if(currentLevel == 'tw') {
                    hideDropdown('th')
                    hideDropdown('fo')
                    hideDropdown('fv')
                }else if(currentLevel == 'th') {
                    hideDropdown('fo')
                    hideDropdown('fv') 
                }else if(currentLevel == 'fo') {
                    hideDropdown('fv') 
                }
            }
        }, function() {})

        $('.navbar').hover(function() {}, function() {
            hideDropdown('on')
            hideDropdown('tw')
            hideDropdown('th')
            hideDropdown('fo')
            hideDropdown('fv')
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyIsImV5ZS5qcyIsIm1haW4uanMiLCJtYXAuanMiLCJtb2RhbC5qcyIsIm5hdmJhci5qcyIsIm92ZXJsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKTtcclxuXHJcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5rcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHRhcmdldEVsID0gZS50YXJnZXQ7XHJcbiAgICB2YXIgaW5rRWwgPSB0YXJnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNpcmNsZScpO1xyXG5cclxuICAgIGlmIChpbmtFbCkge1xyXG4gICAgICBpbmtFbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy0tYW5pbWF0ZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGlua0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBpbmtFbC5jbGFzc0xpc3QuYWRkKCdpbmsnKTtcclxuICAgICAgaW5rRWwuc3R5bGUud2lkdGggPSBpbmtFbC5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heCh0YXJnZXRFbC5vZmZzZXRXaWR0aCwgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0KSArICdweCc7XHJcbiAgICAgIHRhcmdldEVsLmFwcGVuZENoaWxkKGlua0VsKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmtFbC5zdHlsZS5sZWZ0ID0gKGUub2Zmc2V0WCAtIGlua0VsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG4gICAgaW5rRWwuc3R5bGUudG9wID0gKGUub2Zmc2V0WSAtIGlua0VsLm9mZnNldEhlaWdodCAvIDIpICsgJ3B4JztcclxuICAgIGlua0VsLmNsYXNzTGlzdC5hZGQoJ2lzLS1hbmltYXRlJyk7XHJcbiAgfSwgZmFsc2UpO1xyXG59IiwiZnVuY3Rpb24gc2V0RGVmYXVsdE1vZGUoKSB7XHJcbiAgICAkKCcjZXllc3R5bGVzJykucmVtb3ZlKClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RlJywgJ25vcm1hbCcpXHJcbiAgICAkKCcubmF2YmFyX190b3BfX2V5ZSBidXR0b24gc3BhbicpLmh0bWwoJ9CU0LvRjyDRgdC70LDQsdC+0LLQuNC00Y/RidC40YUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRFeWVNb2RlKCkge1xyXG4gICAgJCgnaGVhZCcpLmFwcGVuZCgnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJkaXN0L2Nzcy9leWUuY3NzXCIgaWQ9XCJleWVzdHlsZXNcIj4nKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZGUnLCAnZXllJylcclxuICAgICQoJy5uYXZiYXJfX3RvcF9fZXllIGJ1dHRvbiBzcGFuJykuaHRtbCgn0J7RgtC60LvRjtGH0LjRgtGMJylcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTW9kZSgpIHtcclxuICAgIHZhciBjdXJyZW50TW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RlJylcclxuXHJcbiAgICBpZihjdXJyZW50TW9kZSA9PSAnbm9ybWFsJykge1xyXG4gICAgICAgIHNldEV5ZU1vZGUoKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBzZXREZWZhdWx0TW9kZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgX2N1cnJlbnRNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vZGUnKVxyXG5cclxuaWYoX2N1cnJlbnRNb2RlID09ICdleWUnKSB7XHJcbiAgICBzZXRFeWVNb2RlKCk7XHJcbn1lbHNlIHtcclxuICAgIHNldERlZmF1bHRNb2RlKCk7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbi1waG9uZScpO1xyXG5cclxuICAgICAgICBpZihwaG9uZUlucHV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBob25lSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnB1dHNbaV0sIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrOiAnK3s3fSg5MDApMDAwLTAwLTAwJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcblxyXG4gICAgICAgICQoJy5uZXdzX19tZW51X19pbm5lciB1bCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLm5ld3NfX21lbnVfX25hdnMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLm5ld3NfX21lbnVfX25hdnMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgc3dpcGU6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmVkdV9fbGluZV9fdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmVkdV9fbGluZV9fY29udGVudCcpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH0pIFxyXG5cclxuICAgICAgICAkKCcuZWR1X19saW5lX19jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UGFkZGluZ3MoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnLmlzLS1jLXBsJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJy5pcy0tYy1wcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQxMDBQZXI6ICcuaXMtLWgxMDAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFpbmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nTGVmdCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ1JpZ2h0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMuaGVpZ2h0MTAwUGVyKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcuaXMtLWMtcHQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRQYWRkaW5ncygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBhaWQgPSBfdGhpcy5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgaWYoIWFpZCkge1xyXG4gICAgICAgICAgICAgICAgYWlkID0gX3RoaXMuZGF0YSgndGFyZ2V0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYWlkKS5vZmZzZXQoKS50b3AgLSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKX0sJ3Nsb3cnKTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4tcGhvbmUnKTtcclxuXHJcbiAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICBwaG9uZUlucHV0cywge1xyXG4gICAgICAgICAgICBtYXNrOiAnK3s3fSg5MDApMDAwLTAwLTAwJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuYW5jaG9yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIGFpZCA9IF90aGlzLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBpZighYWlkKSB7XHJcbiAgICAgICAgICAgICAgICBhaWQgPSBfdGhpcy5kYXRhKCd0YXJnZXQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhaWQpLm9mZnNldCgpLnRvcCAtICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpfSwnc2xvdycpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJ5bWFwcy5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogWzUyLjk3MzQ1NiwgMzYuMDgxMDMxXSxcclxuICAgICAgICAgICAgem9vbTogMTYsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgLy8g0KHQvtC30LTQsNGR0Lwg0LzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgIE15SWNvbkNvbnRlbnRMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoXHJcbiAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7IGZvbnQtd2VpZ2h0OiBib2xkO1wiPiRbcHJvcGVydGllcy5pY29uQ29udGVudF08L2Rpdj4nXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbXlQbGFjZW1hcmtXaXRoQ29udGVudCA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUyLjk3MzQ1NiwgMzYuMDgxMDMxXSwge1xyXG4gICAgICAgICAgICBiYWxsb29uQ29udGVudDogJ9CY0L3RgdGC0LjRgtGD0YIg0YDQsNC30LLQuNGC0LjRjyDQvtCx0YDQsNC30L7QstCw0L3QuNGPJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcclxuICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJ2ltZy9tYXJrZXIuc3ZnJyxcclxuICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzEwMCwgMTAwXSxcclxuICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXHJcbiAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy01MCwgLTUwXSxcclxuICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDRgdC70L7RjyDRgSDRgdC+0LTQtdGA0LbQuNC80YvQvCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHQu9C+0Y8g0YEg0LrQsNGA0YLQuNC90LrQvtC5LlxyXG4gICAgICAgICAgICBpY29uQ29udGVudE9mZnNldDogWzE1LCAxNV0sXHJcbiAgICAgICAgICAgIC8vINCc0LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cclxuICAgICAgICAgICAgaWNvbkNvbnRlbnRMYXlvdXQ6IE15SWNvbkNvbnRlbnRMYXlvdXRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcmtXaXRoQ29udGVudCk7XHJcbn0pOyIsImZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbElEKSB7XHJcbiAgICAkKG1vZGFsSUQpLm1vZGFsKHtcclxuICAgICAgICBmYWRlRHVyYXRpb246IDEwMCxcclxuICAgICAgICBzaG93Q2xvc2U6IGZhbHNlLFxyXG4gICAgfSlcclxufVxyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkLm1vZGFsLmZhZGVEdXJhdGlvbiA9IDEwMFxyXG4gICAgICAgICQubW9kYWwuc2hvd0Nsb3NlID0gZmFsc2VcclxuXHJcbiAgICAgICAgJCgnYS5tb2RhbC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdmFyIHRoaXNNb2RhbElkID0gJCh0aGlzKS5hdHRyKCdocmVmJylcclxuICAgICAgICAgICAgb3Blbk1vZGFsKHRoaXNNb2RhbElkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gb3Blbk1vZGFsKCcjbW9kYWxfZm9ybScpXHJcbiAgICAgICAgLy8gb3Blbk1vZGFsKCcjbW9kYWxfc3VjY2VzcycpXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bihsZXZlbCkge1xyXG4gICAgICAgICAgICAkKCcuX25hdmJhci1tZW51W2RhdGEtbGV2ZWw9XCInICsgbGV2ZWwgKyAnXCJdJykuaGlkZSgpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duLmlzLS0nICsgbGV2ZWwpLmhpZGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKG1lbnUsIGxldmVsLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bihsZXZlbClcclxuXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duLmlzLS0nICsgbGV2ZWwpLnNob3coKVxyXG4gICAgICAgICAgICAkKG1lbnUpLnNob3coKVxyXG4gICAgICAgICAgICAvLyAkKCcuX25hdmJhci1tZW51LmlzLS1vbiBsaSBhLCAuX25hdmJhci1tZW51LmlzLS10dyBsaSBhJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAvLyAkKGl0ZW0pLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5fbmF2YmFyLW1lbnUgbGkgYScpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG5cclxuICAgICAgICAgICAgdmFyIGlzRHJvcGRvd24gPSAkKHRoaXMpLmRhdGEoJ2Ryb3Bkb3duJykgfHwgZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGlmKGlzRHJvcGRvd24pIHtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLWJtLW9wZW4nKVxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcl9fYm90dG9tX19idG4gYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duID0gJCgnLl9uYXZiYXItbWVudVtkYXRhLWRyb3Bkb3duPVwiJyArIGlzRHJvcGRvd24gKyAnXCJdJylcclxuICAgICAgICAgICAgICAgIHZhciBsZXZlbCA9ICQoZHJvcGRvd24pLmRhdGEoJ2xldmVsJylcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bihkcm9wZG93biwgbGV2ZWwsIF90aGlzKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudExldmVsID0gJCh0aGlzKS5wYXJlbnRzKCcuX25hdmJhci1tZW51JykuZGF0YSgnbGV2ZWwnKVxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudExldmVsID09ICdvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBoaWRlRHJvcGRvd24oJ3R3JylcclxuICAgICAgICAgICAgICAgICAgICBoaWRlRHJvcGRvd24oJ3RoJylcclxuICAgICAgICAgICAgICAgICAgICBoaWRlRHJvcGRvd24oJ2ZvJylcclxuICAgICAgICAgICAgICAgICAgICBoaWRlRHJvcGRvd24oJ2Z2JylcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRMZXZlbCA9PSAndHcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZURyb3Bkb3duKCd0aCcpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZURyb3Bkb3duKCdmbycpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZURyb3Bkb3duKCdmdicpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihjdXJyZW50TGV2ZWwgPT0gJ3RoJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVEcm9wZG93bignZm8nKVxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVEcm9wZG93bignZnYnKSBcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRMZXZlbCA9PSAnZm8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZURyb3Bkb3duKCdmdicpIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7fSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcicpLmhvdmVyKGZ1bmN0aW9uKCkge30sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oJ29uJylcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCd0dycpXHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigndGgnKVxyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oJ2ZvJylcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCdmdicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmJhbm5lcl9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5iYW5uZXJfX21jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJycsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJycsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19ib3R0b21fX2J0biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tYm0tb3BlbicpXHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5DYXRlZ29yeU1NKGlkKSB7XHJcbiAgICAgICAgICAgICQoJy5hc2lkZV9fc3ViIHVsLmlzLS1tZW51W2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQ2F0ZWdvcnlNTSgpIHtcclxuICAgICAgICAgICAgJCgnLmFzaWRlJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnLmFzaWRlX19zdWIgdWwuaXMtLW1lbnUnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX21haW5fX21lbnUgdWwgbGkgYS5pcy0tZHJvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICQoJy5hc2lkZScpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIG9wZW5DYXRlZ29yeU1NKCQodGhpcykuZGF0YSgnaWQnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiBidXR0b24uaXMtLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VDYXRlZ29yeU1NKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bC5pcy0tbWVudSBsaSB1bCcpLmhpZGUoKVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bCBsaSBhLmlzLS1kcm9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudC1tZW51X19tb2JpbGUgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLXQtbWVudScpXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudC1tZW51X19pbm5lciBidXR0b24uaXMtLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDBcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKVxyXG4gICAgICAgICAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzdCA+IDIwMCAmJiAkKCdib2R5JykuaW5uZXJXaWR0aCgpID4gMTA4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tYm0tb3BlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdmJhcl9fYm90dG9tX19idG4gYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3RcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBvcGVuT3ZlcmxheSgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImlzLS1vdmVybGF5XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU92ZXJsYXkoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCJpcy0tb3ZlcmxheVwiLFwiXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwiaXMtLXQtbWVudVwiLFwiXCIpO1xyXG59Il19
