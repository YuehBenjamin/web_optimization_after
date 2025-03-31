// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    },
    onInitialized: setOwlNavAccessibility,
    onResized: setOwlNavAccessibility,
    onTranslated: setOwlNavAccessibility
});

function setOwlNavAccessibility() {
    var prevBtn = document.querySelector('.owl-carousel .owl-nav .owl-prev');
    var nextBtn = document.querySelector('.owl-carousel .owl-nav .owl-next');
    if (prevBtn) {
        prevBtn.setAttribute('aria-label', '上一則');
        prevBtn.setAttribute('title', '上一則');
        prevBtn.removeAttribute('role');
    }
    if (nextBtn) {
        nextBtn.setAttribute('aria-label', '下一則');
        nextBtn.setAttribute('title', '下一則');
        nextBtn.removeAttribute('role');
    }
}


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}