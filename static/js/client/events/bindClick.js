function avatarFile(el) {
    console.log(el.childNodes[1])
    let reader = new FileReader();
    let input = document.getElementById("avatar")
    input.click()

    input.addEventListener('change', function(e){
        reader.onload = () => {
            el.childNodes[1].src = reader.result
        }
        reader.readAsDataURL(input.files[0])
    }, false)
    
}

window.addEventListener("load", function(e) {
    if( document.getElementById("f").checked ) {
        this.document.getElementsByClassName("btn-f")[0].className = "btn btn-f bg-su"
    } else if (document.getElementById("m").checked ) {
        this.document.getElementsByClassName("btn-m")[0].className = "btn btn-m bg-su"
    }
})

function radioBind(el) {
    if(el.textContent.includes("F")) {
        document.getElementById("f").checked = true
        document.getElementsByClassName("btn-m")[0].className = "btn btn-m bg-d"
        document.getElementsByClassName("btn-f")[0].className = "btn btn-f bg-su"
    } else {
        document.getElementById("m").checked = true
        document.getElementsByClassName("btn-m")[0].className = "btn btn-m bg-su"
        document.getElementsByClassName("btn-f")[0].className = "btn btn-f bg-d"
    }
}