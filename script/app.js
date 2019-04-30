$(function() {
    $.scrollify({
        section: ".page",   
    before: function(section) {
        console.log(section)
        if(section === 1) {
            $(".section2Description").addClass("fadeInLeftBig")
            $(".section2Image").addClass("fadeInRightBig")
            $(".section2Category").addClass("fadeInLeftBig")
        }
        if(section !== 1) {

            $(".section2Description").removeClass("fadeInLeftBig")
            $(".section2Image").removeClass("fadeInRightBig")
            $(".section2Category").removeClass("fadeInLeftBig")

        }
        if(section === 2) {
        }
        if(section !== 2) {
        }
    }
    })
})