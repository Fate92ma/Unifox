$(document).ready(function () { // Strart Coding Here

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

}); // End Code