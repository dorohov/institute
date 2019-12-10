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