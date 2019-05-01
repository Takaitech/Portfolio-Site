$(function() {
    $.scrollify({
        section: ".page",  
        scrollSpeed: 2000, 
        before: function(section) {
        console.log(section)
        if(section === 1) {
            $(".section2Description").addClass("fadeIn")
            $(".section2Image").addClass("fadeInRight")
            $(".section2Category").addClass("fadeIn")
            $(".section2Title").addClass("fadeIn")
            $(".section2Tech").addClass("fadeIn")
            $(".section2Links").addClass("fadeIn")
        }
        if(section === 2) {
            $(".section3Description").addClass("fadeIn")
            $(".section3Image").addClass("fadeInRight")
            $(".section3Category").addClass("fadeIn")
            $(".section3Title").addClass("fadeIn")
            $(".section3Tech").addClass("fadeIn")
            $(".section3Links").addClass("fadeIn")
        }
        if(section === 3) {
            $(".section4Description").addClass("fadeIn")
            $(".section4Image").addClass("fadeInRight")
            $(".section4Category").addClass("fadeIn")
            $(".section4Title").addClass("fadeIn")
            $(".section4Tech").addClass("fadeIn")
            $(".section4Links").addClass("fadeIn")
        }
    }
    })
})


$(".projectShortcut").on('click', function() {
    $.scrollify.move(1);
})

$(".bioShortcut").on('click', function() {
    $.scrollify.move(4);
})


$(".topShortcut").on('click', function() {
    $.scrollify.move(0);
})

