function toogle(element) {
    if( element.className.search('bg-su') != -1 ) {
        element.className = element.className.replace('bg-su', 'bg-i')
    } else if( element.className.search('bg-i') != -1 ) {
        element.className = element.className.replace('bg-i', 'bg-su')
    }
}