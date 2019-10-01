(function($) {
    "use strict"
    $(function() {

        var _items = {
            navbarMainMenu: ".navbar__bottom__menu ul"
        }
        
        $('.navbar__bottom__btn button').on('click', function() {
            $(this).toggleClass('is--active')
        })

        setMenus()

        function setMenus() {
            for(var i = 0; i < mainMenu.length; i++) {

                if(mainMenu[i].parents) {
                    var currentItem = '<li><a data-parents=\'' + JSON.stringify(mainMenu[i].parents) + '\' href="' + mainMenu[i].link + '">' + mainMenu[i].title + '</a></li>'
                }else {
                    var currentItem = '<li><a href="' + mainMenu[i].link + '">' + mainMenu[i].title + '</a></li>'
                }

                $(_items.navbarMainMenu).append(currentItem)
            }
        }
        
    })
})(jQuery);