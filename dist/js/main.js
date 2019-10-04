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
        
    })
})(jQuery);
function openOverlay() {
    body.classList.add("is--overlay");
}

function closeOverlay() {
    document.body.className = document.body.className.replace("is--overlay","");
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bi5qcyIsIm1haW4uanMiLCJuYXZiYXIuanMiLCJvdmVybGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyk7XHJcblxyXG5mb3IgKHZhciBpID0gMCwgbGVuID0gbGlua3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICBsaW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIHZhciB0YXJnZXRFbCA9IGUudGFyZ2V0O1xyXG4gICAgdmFyIGlua0VsID0gdGFyZ2V0RWwucXVlcnlTZWxlY3RvcignLmJ0bi1jaXJjbGUnKTtcclxuXHJcbiAgICBpZiAoaW5rRWwpIHtcclxuICAgICAgaW5rRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtLWFuaW1hdGUnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgaW5rRWwuY2xhc3NMaXN0LmFkZCgnaW5rJyk7XHJcbiAgICAgIGlua0VsLnN0eWxlLndpZHRoID0gaW5rRWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0RWwub2Zmc2V0V2lkdGgsIHRhcmdldEVsLm9mZnNldEhlaWdodCkgKyAncHgnO1xyXG4gICAgICB0YXJnZXRFbC5hcHBlbmRDaGlsZChpbmtFbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5rRWwuc3R5bGUubGVmdCA9IChlLm9mZnNldFggLSBpbmtFbC5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4JztcclxuICAgIGlua0VsLnN0eWxlLnRvcCA9IChlLm9mZnNldFkgLSBpbmtFbC5vZmZzZXRIZWlnaHQgLyAyKSArICdweCc7XHJcbiAgICBpbmtFbC5jbGFzc0xpc3QuYWRkKCdpcy0tYW5pbWF0ZScpO1xyXG4gIH0sIGZhbHNlKTtcclxufSIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnI292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VPdmVybGF5KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBhZGRpbmdzKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJy5pcy0tYy1wbCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcuaXMtLWMtcHInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0MTAwUGVyOiAnLmlzLS1oMTAwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRhaW5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcblxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ0xlZnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdSaWdodCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLmhlaWdodDEwMFBlcikuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLmlzLS1jLXB0JykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZGRpbmdzKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgYWlkID0gX3RoaXMuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmKCFhaWQpIHtcclxuICAgICAgICAgICAgICAgIGFpZCA9IF90aGlzLmRhdGEoJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFpZCkub2Zmc2V0KCkudG9wIC0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICQoJ2Zvcm0nKS5wYXJzbGV5KClcclxuXHJcbiAgICAgICAgdmFyIHBob25lSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luLXBob25lJyk7XHJcblxyXG4gICAgICAgIG5ldyBJTWFzayhcclxuICAgICAgICAgICAgcGhvbmVJbnB1dHMsIHtcclxuICAgICAgICAgICAgbWFzazogJyt7N30oOTAwKTAwMC0wMC0wMCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBhaWQgPSBfdGhpcy5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgaWYoIWFpZCkge1xyXG4gICAgICAgICAgICAgICAgYWlkID0gX3RoaXMuZGF0YSgndGFyZ2V0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYWlkKS5vZmZzZXQoKS50b3AgLSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKX0sJ3Nsb3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bihsZXZlbCkge1xyXG4gICAgICAgICAgICAkKCcuX25hdmJhci1tZW51W2RhdGEtbGV2ZWw9XCInICsgbGV2ZWwgKyAnXCJdJykuaGlkZSgpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duLmlzLS0nICsgbGV2ZWwpLmhpZGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0Ryb3Bkb3duKG1lbnUsIGxldmVsLCBpdGVtKSB7XHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bihsZXZlbClcclxuXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2Ryb3Bkb3duLmlzLS0nICsgbGV2ZWwpLnNob3coKVxyXG4gICAgICAgICAgICAkKG1lbnUpLnNob3coKVxyXG4gICAgICAgICAgICAvLyAkKCcuX25hdmJhci1tZW51LmlzLS1vbiBsaSBhLCAuX25hdmJhci1tZW51LmlzLS10dyBsaSBhJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAvLyAkKGl0ZW0pLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5fbmF2YmFyLW1lbnUgbGkgYScpLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG5cclxuICAgICAgICAgICAgdmFyIGlzRHJvcGRvd24gPSAkKHRoaXMpLmRhdGEoJ2Ryb3Bkb3duJykgfHwgZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGlmKGlzRHJvcGRvd24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBkcm9wZG93biA9ICQoJy5fbmF2YmFyLW1lbnVbZGF0YS1kcm9wZG93bj1cIicgKyBpc0Ryb3Bkb3duICsgJ1wiXScpXHJcbiAgICAgICAgICAgICAgICB2YXIgbGV2ZWwgPSAkKGRyb3Bkb3duKS5kYXRhKCdsZXZlbCcpXHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24oZHJvcGRvd24sIGxldmVsLCBfdGhpcylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRMZXZlbCA9ICQodGhpcykucGFyZW50cygnLl9uYXZiYXItbWVudScpLmRhdGEoJ2xldmVsJylcclxuICAgICAgICAgICAgICAgIGlmKCFjdXJyZW50TGV2ZWwpIGhpZGVEcm9wZG93bignb24nKVxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudExldmVsID09ICdvbicpIGhpZGVEcm9wZG93bigndHcnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIGZ1bmN0aW9uKCkge30pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXInKS5ob3ZlcihmdW5jdGlvbigpIHt9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCdvbicpXHJcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigndHcnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5iYW5uZXJfX2Nhcm91c2VsX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnJyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnJyxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYmFubmVyX19tY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcnLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fYm90dG9tX19idG4gYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnaXMtLWJtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuQ2F0ZWdvcnlNTShpZCkge1xyXG4gICAgICAgICAgICAkKCcuYXNpZGVfX3N1YiB1bC5pcy0tbWVudVtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZUNhdGVnb3J5TU0oKSB7XHJcbiAgICAgICAgICAgICQoJy5hc2lkZScpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJy5hc2lkZV9fc3ViIHVsLmlzLS1tZW51JykuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmFzaWRlX19tYWluX19tZW51IHVsIGxpIGEuaXMtLWRyb3AnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAkKCcuYXNpZGUnKS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICBvcGVuQ2F0ZWdvcnlNTSgkKHRoaXMpLmRhdGEoJ2lkJykpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFzaWRlX19zdWIgYnV0dG9uLmlzLS1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQ2F0ZWdvcnlNTSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFzaWRlX19zdWIgdWwuaXMtLW1lbnUgbGkgdWwnKS5oaWRlKClcclxuXHJcbiAgICAgICAgJCgnLmFzaWRlX19zdWIgdWwgbGkgYS5pcy0tZHJvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygndWwnKS5zbGlkZVRvZ2dsZSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiZnVuY3Rpb24gb3Blbk92ZXJsYXkoKSB7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJpcy0tb3ZlcmxheVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwiaXMtLW92ZXJsYXlcIixcIlwiKTtcclxufSJdfQ==
