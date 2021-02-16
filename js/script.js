$(document).ready(function () { // Start Coding Here

    // Preloader

    $(".preloader").fadeOut(3000);

    //  Caption

    $(".portfolio-wrapper").mouseenter(function () {
        $(this).children(".portfolio-caption").addClass("up");
    });

    $(".portfolio-wrapper").mouseleave(function () {
        $(this).children(".portfolio-caption").removeClass("up");
    });

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

    // Mini ul

    $(".menu").click(function () {
        $(".container1 ul").toggleClass("mini");
    });

    // Smooth Scroll

    $("header .container1 ul li a").click(function () {

        var target = $(this).attr("href");

        $("body", "html").animate({
            scrollTop: $(target).offset().top
        }, 1000)

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

}); // End Code