function toogleIcon(element) {
    if( !element.className.includes("activated") ) {
        element.childNodes[5].className = "fas fa-chevron-down"
        element.className = "topic pointer activated"
    } else {
        element.childNodes[5].className = "fas fa-chevron-right"
        element.className = "topic pointer"
    }
}