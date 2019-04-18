$(function() {
    $.scrollify({
      section : ".page",
      scrollSpeed: 2000,
    });

    $(document.body).on('touchmove',function() {
      $.scrollify.next();
    }); // for mobile


    $(".page").scroll(function() { //.box is the class of the div
      $.scrollify.next();
  });
  
  });