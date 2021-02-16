$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        duration: 2000,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            880: {
                items: 3,
            }
        }
    });

});