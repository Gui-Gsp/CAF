function hideAllThem() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").hide(600)
}

function showRooms() {
    $(".content-rooms").show(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").hide(600)
}

function showHistoric() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").show(600)
    $("#card-profile").hide(600)

    document.getElementsByClassName("content-booking-past")[0].className = "card content-booking content-booking-past w-100"

}

function showBooking() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").show(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").hide(600)

    document.getElementsByClassName("content-booking-current")[0].className = "card content-booking content-booking-current w-100"

}

function showProfile() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").show(600)

    document.getElementsByClassName("content-booking-current")[0].className = "card content-booking content-booking-current w-100"

}