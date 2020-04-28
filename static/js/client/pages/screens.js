function hideAllThem() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)
}

function showHome() {
    $(".content-rooms").show(600)
    $(".content-check").show(600)
    $(".content-booking-current").show(600)
    $(".content-booking-warning").show(600)
    $(".content-booking-past").show(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)

    document.getElementById("list-home").className = "topic pointer activated"

}

function showProfile() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $(".content-check-in").hide(600)
    $(".content-check-out").hide(600)
    $("#card-profile").show(600)

    document.getElementById("list-profile").className = "topic pointer activated"
    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-rooms").className = "topic pointer"
    document.getElementById("sublist-rooms").className = "subtopic pointer"
    document.getElementById("sublist-historic").className = "subtopic pointer"
    document.getElementById("sublist-booking").className = "subtopic pointer"
    document.getElementById("sublist-warning").className = "subtopic pointer"
    document.getElementById("list-check-in").className = "topic pointer"
    document.getElementById("list-check-out").className = "topic pointer"
    document.getElementById("list-config").className = "topic pointer"

}

function showRooms() {
    $(".content-rooms").show(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)

    document.getElementById("sublist-rooms").className = "subtopic pointer activated"
    document.getElementById("sublist-historic").className = "subtopic pointer"
    document.getElementById("sublist-booking").className = "subtopic pointer"
    document.getElementById("sublist-warning").className = "subtopic pointer"
    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-profile").className = "topic pointer"
    document.getElementById("list-config").className = "topic pointer"
}

function showHistoric() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").show(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)

    document.getElementsByClassName("content-booking-past")[0].className = "card content-booking content-booking-past w-100"

    document.getElementById("sublist-rooms").className = "subtopic pointer"
    document.getElementById("sublist-historic").className = "subtopic pointer activated"
    document.getElementById("sublist-booking").className = "subtopic pointer"
    document.getElementById("sublist-warning").className = "subtopic pointer"
    document.getElementById("list-profile").className = "topic pointer"
    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-config").className = "topic pointer"
}

function showBooking() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").show(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)

    document.getElementsByClassName("content-booking-current")[0].className = "card content-booking content-booking-current w-100"

    document.getElementById("sublist-rooms").className = "subtopic pointer"
    document.getElementById("sublist-historic").className = "subtopic pointer"
    document.getElementById("sublist-booking").className = "subtopic pointer activated"
    document.getElementById("sublist-warning").className = "subtopic pointer"
    document.getElementById("list-profile").className = "topic pointer"
    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-config").className = "topic pointer"


}

function showWarnings() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").show(600)
    $(".content-booking-past").hide(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)

    document.getElementsByClassName("content-booking-warning")[0].className = "card content-booking content-booking-warning w-100"

    document.getElementById("sublist-rooms").className = "subtopic pointer"
    document.getElementById("sublist-historic").className = "subtopic pointer"
    document.getElementById("sublist-booking").className = "subtopic pointer"
    document.getElementById("sublist-warning").className = "subtopic pointer activated"
    document.getElementById("list-profile").className = "topic pointer"
    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-config").className = "topic pointer"

}

function showCheckIn() {
    $(".content-rooms").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $(".content-check-in").show(600)
    $(".content-check-out").hide(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)

    document.getElementsByClassName("content-check-in")[0].className = "card content-booking content-check-in w-100"

    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-profile").className = "topic pointer"
    document.getElementById("sublist-rooms").className = "subtopic pointer"
    document.getElementById("sublist-historic").className = "subtopic pointer"
    document.getElementById("sublist-booking").className = "subtopic pointer"
    document.getElementById("list-check-in").className = "topic pointer activated"
    document.getElementById("list-check-out").className = "topic pointer"
    document.getElementById("list-config").className = "topic pointer"

}

function showCheckOut() {
    $(".content-rooms").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $(".content-check-in").hide(600)
    $(".content-check-out").show(600)
    $("#card-profile").hide(600)
    $("#card-config").hide(600)

    document.getElementsByClassName("content-check-out")[0].className = "card content-booking content-check-out w-100"

    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-profile").className = "topic pointer"
    document.getElementById("sublist-rooms").className = "subtopic pointer"
    document.getElementById("sublist-historic").className = "subtopic pointer"
    document.getElementById("sublist-booking").className = "subtopic pointer"
    document.getElementById("list-check-in").className = "topic pointer"
    document.getElementById("list-check-out").className = "topic pointer activated"
    document.getElementById("list-config").className = "topic pointer"

}

function showConfig() {
    $(".content-rooms").hide(600)
    $(".content-check").hide(600)
    $(".content-booking-current").hide(600)
    $(".content-booking-warning").hide(600)
    $(".content-booking-past").hide(600)
    $(".content-check-in").hide(600)
    $(".content-check-out").hide(600)
    $("#card-profile").hide(600)
    $("#card-config").show(600)

    document.getElementById("list-profile").className = "topic pointer"
    document.getElementById("list-home").className = "topic pointer"
    document.getElementById("list-rooms").className = "topic pointer"
    document.getElementById("sublist-rooms").className = "subtopic pointer"
    document.getElementById("sublist-historic").className = "subtopic pointer"
    document.getElementById("sublist-booking").className = "subtopic pointer"
    document.getElementById("sublist-warning").className = "subtopic pointer"
    document.getElementById("list-check-in").className = "topic pointer"
    document.getElementById("list-check-out").className = "topic pointer"
    document.getElementById("list-config").className = "topic pointer activated"

}