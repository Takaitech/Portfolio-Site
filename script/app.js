$(function() {
    $.scrollify({
      section : ".page",
      scrollSpeed: 2000,
    });

    $(document.body).on('touchmove',function(e){
      e.preventDefault();
      $.scrollify.next();
      //CODE GOES HERE
    });

    $(".page").scroll(function() { //.box is the class of the div
      $.scrollify.next();
  });
  
  });