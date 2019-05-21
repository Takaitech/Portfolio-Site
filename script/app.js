//scrollify setup / Animations
$(function() {
    $.scrollify({
        section: ".page",
        scrollSpeed: 1000, 
        before: function(section) {
        if(section === 1 || section === 2 || section === 3 || section === 4 || section === 5) {
            $(".pagination").css("visibility","visible")
            $(".pagination").addClass("fadeIn")
        }
        if(section === 2) {
            $(".section2Description").addClass("fadeIn")
            $(".section2Image").addClass("fadeInRight")
            $(".section2Category").addClass("fadeIn")
            $(".section2Title").addClass("fadeIn")
            $(".section2Tech").addClass("fadeIn")
            $(".section2Links").addClass("fadeIn")
        }
        if(section === 3) {
            $(".section3Description").addClass("fadeIn")
            $(".section3Image").addClass("fadeInRight")
            $(".section3Category").addClass("fadeIn")
            $(".section3Title").addClass("fadeIn")
            $(".section3Tech").addClass("fadeIn")
            $(".section3Links").addClass("fadeIn")
        }
        if(section === 4) {
            $(".section4Description").addClass("fadeIn")
            $(".section4Image").addClass("fadeInRight")
            $(".section4Category").addClass("fadeIn")
            $(".section4Title").addClass("fadeIn")
            $(".section4Tech").addClass("fadeIn")
            $(".section4Links").addClass("fadeIn")
        }
        if(section === 5) {
            $(".nameContainer").addClass("slideInDown")
        }
    }
    })
})

// Pagination
$(".one").on('click', function() {
    $.scrollify.move(0);
})

$(".two").on('click', function() {
    $.scrollify.move(1);
})

$(".three").on('click', function() {
    $.scrollify.move(2);
})

$(".four").on('click', function() {
    $.scrollify.move(3);
})
$(".five").on('click', function() {
    $.scrollify.move(4);
})
$(".six").on('click', function() {
    $.scrollify.move(5);
})
