function toogleIcon(element) {
    if( !element.className.includes("activate") ) {
        element.childNodes[5].className = "fas fa-chevron-down"
        element.className = "topic pointer activate"
    } else {
        element.childNodes[5].className = "fas fa-chevron-right"
        element.className = "topic pointer"
    }
}