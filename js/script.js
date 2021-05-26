$(document).ready(function () { // Start Coding Here

    // Preloader

    $(".preloader").fadeOut(3000);

    // On Scroll

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 250) {
            $(".top i").css("visibility", "visible");
            $("header").addClass("bg");
            $(".container1 ul li a").addClass("bga");
            $("h1").addClass("bga");

        } else {
            $(".top i").css("visibility", "hidden");
            $("header").removeClass("bg");
            $(".container1 ul li a").removeClass("bga");
            $("h1").removeClass("bga");
        }
    });

    // Back to top

    $(".top").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 1000)
    });

    // Smooth Scroll

    $("header .container1 ul li a").click(function () {

        var target = $(this).attr("href");

        $("body", "html").animate({
            scrollTop: $(target).offset().top
        }, 1000)

    });

    // Mini ul

    $(".menu").click(function () {
        $(".container1 ul").toggleClass("mini");
    });

    // Count To

    $(window).scroll(function () {
        var w = $(this).scrollTop()

        if (w <= 2335) {
            $('.timer').countTo({
                onUpdate: true,
            });
        };
    });

    // Portfolios

    $(function () {
        var filterList = {
            init: function () {
                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.design'
                    }
                });
            }
        };
        filterList.init();
    });

    // circle1

    $('.circle1').circleProgress({
        value: 0.90,
        size: 150,
        animation: {
            duration: 20000
        },
        emptyFill: "white",
        startAngle: -2, // not important
        fill: "#049dff",
    });

    // circle2

    $('.circle2').circleProgress({
        value: 0.80,
        size: 150,
        animation: {
            duration: 20000
        },
        emptyFill: "white",
        startAngle: -2, // not important
        fill: "#fdba04",
    });

    // Team

    $('#mixedSlider').multislider({
        duration: 1000,
        interval: 2000
    });

    // Tabs

    $(".tabs li").click(function () {
        var tab = $(this).attr("tab");
        $("#about-tab , #service-tab, #contact-tab").hide();
        $("#" + tab).fadeIn();

    });

    $("[tab]").on("click", function () {
        $('[tab]').removeClass('active');
        $(this).addClass('active');
    });

    // Owl

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
            768: {
                items: 2,
            }
        }
    });

    // Feed

    var swiper = new Swiper('.swiper-container', {
        autoHeight: true,
        autoplay: true,
        duration: 2000,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}); // End Code