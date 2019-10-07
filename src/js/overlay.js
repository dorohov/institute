function openOverlay() {
    document.body.classList.add("is--overlay");
}

function closeOverlay() {
    document.body.className = document.body.className.replace("is--overlay","");
    document.body.className = document.body.className.replace("is--t-menu","");
}