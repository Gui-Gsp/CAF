function toogleIcon(element) {
    if( element.childNodes[3].className.includes("right") ) {
        element.childNodes[3].className = "fas fa-chevron-down"
        element.className = "topic pointer activated"
    } else {
        element.childNodes[3].className = "fas fa-chevron-right"
        element.className = "topic pointer"
    }
}