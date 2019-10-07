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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyIsIm1haW4uanMiLCJuYXZiYXIuanMiLCJvdmVybGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpO1xyXG5cclxuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmtzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgbGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgdGFyZ2V0RWwgPSBlLnRhcmdldDtcclxuICAgIHZhciBpbmtFbCA9IHRhcmdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2lyY2xlJyk7XHJcblxyXG4gICAgaWYgKGlua0VsKSB7XHJcbiAgICAgIGlua0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLS1hbmltYXRlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgaW5rRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGlua0VsLmNsYXNzTGlzdC5hZGQoJ2luaycpO1xyXG4gICAgICBpbmtFbC5zdHlsZS53aWR0aCA9IGlua0VsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KHRhcmdldEVsLm9mZnNldFdpZHRoLCB0YXJnZXRFbC5vZmZzZXRIZWlnaHQpICsgJ3B4JztcclxuICAgICAgdGFyZ2V0RWwuYXBwZW5kQ2hpbGQoaW5rRWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlua0VsLnN0eWxlLmxlZnQgPSAoZS5vZmZzZXRYIC0gaW5rRWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICBpbmtFbC5zdHlsZS50b3AgPSAoZS5vZmZzZXRZIC0gaW5rRWwub2Zmc2V0SGVpZ2h0IC8gMikgKyAncHgnO1xyXG4gICAgaW5rRWwuY2xhc3NMaXN0LmFkZCgnaXMtLWFuaW1hdGUnKTtcclxuICB9LCBmYWxzZSk7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJyNvdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmVkdV9fbGluZV9fdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmVkdV9fbGluZV9fY29udGVudCcpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH0pIFxyXG5cclxuICAgICAgICAkKCcuZWR1X19saW5lX19jb250ZW50Jykuc2xpZGVVcCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UGFkZGluZ3MoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnLmlzLS1jLXBsJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJy5pcy0tYy1wcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQxMDBQZXI6ICcuaXMtLWgxMDAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFpbmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nTGVmdCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ1JpZ2h0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMuaGVpZ2h0MTAwUGVyKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCcuaXMtLWMtcHQnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRQYWRkaW5ncygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBhaWQgPSBfdGhpcy5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgaWYoIWFpZCkge1xyXG4gICAgICAgICAgICAgICAgYWlkID0gX3RoaXMuZGF0YSgndGFyZ2V0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYWlkKS5vZmZzZXQoKS50b3AgLSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKX0sJ3Nsb3cnKTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4tcGhvbmUnKTtcclxuXHJcbiAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICBwaG9uZUlucHV0cywge1xyXG4gICAgICAgICAgICBtYXNrOiAnK3s3fSg5MDApMDAwLTAwLTAwJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuYW5jaG9yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIGFpZCA9IF90aGlzLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBpZighYWlkKSB7XHJcbiAgICAgICAgICAgICAgICBhaWQgPSBfdGhpcy5kYXRhKCd0YXJnZXQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhaWQpLm9mZnNldCgpLnRvcCAtICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpfSwnc2xvdycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZURyb3Bkb3duKGxldmVsKSB7XHJcbiAgICAgICAgICAgICQoJy5fbmF2YmFyLW1lbnVbZGF0YS1sZXZlbD1cIicgKyBsZXZlbCArICdcIl0nKS5oaWRlKClcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd24uaXMtLScgKyBsZXZlbCkuaGlkZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93RHJvcGRvd24obWVudSwgbGV2ZWwsIGl0ZW0pIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKGxldmVsKVxyXG5cclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcGRvd24uaXMtLScgKyBsZXZlbCkuc2hvdygpXHJcbiAgICAgICAgICAgICQobWVudSkuc2hvdygpXHJcbiAgICAgICAgICAgIC8vICQoJy5fbmF2YmFyLW1lbnUuaXMtLW9uIGxpIGEsIC5fbmF2YmFyLW1lbnUuaXMtLXR3IGxpIGEnKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIC8vICQoaXRlbSkuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLl9uYXZiYXItbWVudSBsaSBhJykuaG92ZXIoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcblxyXG4gICAgICAgICAgICB2YXIgaXNEcm9wZG93biA9ICQodGhpcykuZGF0YSgnZHJvcGRvd24nKSB8fCBmYWxzZVxyXG5cclxuICAgICAgICAgICAgaWYoaXNEcm9wZG93bikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duID0gJCgnLl9uYXZiYXItbWVudVtkYXRhLWRyb3Bkb3duPVwiJyArIGlzRHJvcGRvd24gKyAnXCJdJylcclxuICAgICAgICAgICAgICAgIHZhciBsZXZlbCA9ICQoZHJvcGRvd24pLmRhdGEoJ2xldmVsJylcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bihkcm9wZG93biwgbGV2ZWwsIF90aGlzKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudExldmVsID0gJCh0aGlzKS5wYXJlbnRzKCcuX25hdmJhci1tZW51JykuZGF0YSgnbGV2ZWwnKVxyXG4gICAgICAgICAgICAgICAgaWYoIWN1cnJlbnRMZXZlbCkgaGlkZURyb3Bkb3duKCdvbicpXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50TGV2ZWwgPT0gJ29uJykgaGlkZURyb3Bkb3duKCd0dycpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7fSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcicpLmhvdmVyKGZ1bmN0aW9uKCkge30sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoaWRlRHJvcGRvd24oJ29uJylcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCd0dycpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmJhbm5lcl9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5iYW5uZXJfX21jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJycsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJycsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19ib3R0b21fX2J0biBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tYm0tb3BlbicpXHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5DYXRlZ29yeU1NKGlkKSB7XHJcbiAgICAgICAgICAgICQoJy5hc2lkZV9fc3ViIHVsLmlzLS1tZW51W2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlQ2F0ZWdvcnlNTSgpIHtcclxuICAgICAgICAgICAgJCgnLmFzaWRlJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnLmFzaWRlX19zdWIgdWwuaXMtLW1lbnUnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX21haW5fX21lbnUgdWwgbGkgYS5pcy0tZHJvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICQoJy5hc2lkZScpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgIG9wZW5DYXRlZ29yeU1NKCQodGhpcykuZGF0YSgnaWQnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiBidXR0b24uaXMtLXByZXYnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VDYXRlZ29yeU1NKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bC5pcy0tbWVudSBsaSB1bCcpLmhpZGUoKVxyXG5cclxuICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bCBsaSBhLmlzLS1kcm9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCd1bCcpLnNsaWRlVG9nZ2xlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudC1tZW51X19tb2JpbGUgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLXQtbWVudScpXHJcbiAgICAgICAgICAgIG9wZW5PdmVybGF5KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudC1tZW51X19pbm5lciBidXR0b24uaXMtLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3ZlcmxheSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJpcy0tb3ZlcmxheVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwiaXMtLW92ZXJsYXlcIixcIlwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZShcImlzLS10LW1lbnVcIixcIlwiKTtcclxufSJdfQ==
