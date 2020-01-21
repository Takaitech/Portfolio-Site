//scrollify setup / Animations

function deselectAllButtons() {
  $(".shortcut").children().css("backgroundColor","transparent")

}

function whiteButtons() {
  $('.shortcut').children().css("borderColor", "rgba(60,60,60)")
}

function blackButtons() {
  $('.shortcut').children().css("borderColor", "black")
}

$(function() {
  $.scrollify({
    section: ".page",
    scrollSpeed: 1000,
    before: function(section) {
      if (
        section === 1 ||
        section === 2 ||
        section === 3 ||
        section === 4 ||
        section === 5
      ) {
        
      }
      if(section === 0) { 
        whiteButtons()
        deselectAllButtons()
        $(".one").children().css("backgroundColor","#e6e6e6")

      }
      if(section === 1) { 
        blackButtons()
        deselectAllButtons()
        $(".two").children().css("backgroundColor","#e6e6e6")
      }

      if (section === 2) {
        
        $(".section2Description").addClass("fadeInUp");
        $(".section2Image").addClass("fadeInUp");
        $(".section2Title").addClass("fadeInDown");
        $(".section2Tech").addClass("fadeInUp");
        $(".section2Links").addClass("fadeInUp");
        blackButtons()
        deselectAllButtons()
        $(".three").children().css("backgroundColor","#e6e6e6")

      }
      if (section === 3) {
        $(".section3Description").addClass("fadeInUp");
        $(".section3Image").addClass("fadeInUp");
        $(".section3Title").addClass("fadeInDown");
        $(".section3Tech").addClass("fadeInUp");
        $(".section3Links").addClass("fadeInUp");
        blackButtons()
        deselectAllButtons()
        $(".four").children().css("backgroundColor","#e6e6e6")

      }
      if (section === 4) {
        $(".section4Description").addClass("fadeInUp");
        $(".section4Image").addClass("fadeInUp");
        $(".section4Title").addClass("fadeInDown");
        $(".section4Tech").addClass("fadeInUp");
        $(".section4Links").addClass("fadeInUp");
        blackButtons()
        deselectAllButtons()
        $(".five").children().css("backgroundColor","#e6e6e6")

      }
      if (section === 5) {
        $(".nameContainer").addClass("slideInDown");
        whiteButtons()
        deselectAllButtons()
        $(".six").children().css("backgroundColor","#e6e6e6")
        
      }
    }
  });
});

// Pagination
$(".one").on("click", function() {
  $.scrollify.move(0);
});

$(".two").on("click", function() {
  $.scrollify.move(1);
});

$(".three").on("click", function() {
  $.scrollify.move(2);
});

$(".four").on("click", function() {
  $.scrollify.move(3);
});
$(".five").on("click", function() {
  $.scrollify.move(4);
});
$(".six").on("click", function() {
  $.scrollify.move(5);
});

let text =
  "Hi/I AM/TAYLOR WARD/-/Front-end web developer/based in/Los Angeles,  Ca";
let rowArray = text.split("/");

$("#headline").append(`<span class="currentRow"> </span>`)

setTimeout(() => {
    $("#headline").append(`<span class="currentRow">${text[0]}</span>`);
},750) 
 
setTimeout(() => {
    $(".currentRow").removeClass("currentRow")
    $("#headline").append(`<span class="currentRow">${text[1]}</span>`);
},1000)


let i = 1;
let row = 1

setTimeout(() => {
  var interval = setInterval(function() {
    ++i;
    if (i === text.length) {
      setTimeout(() => {
        $('.guide').addClass('fadeIn')
      },100)
      $(".pagination").css("visibility", "visible");
      $(".pagination").addClass("fadeIn");
      clearInterval(interval);
      return;
      
    } else if (text[i] === "/") {
      $("#headline").append("<br>");
      row ++
      $(".currentRow").removeClass("currentRow")

      $("#headline").append(`<span id="row${row}" class="spanRow currentRow"></span>`);
    } 
    else {
      $(`#row${row}`).append(text[i])
    }
  }, 80);
}, 2000);
