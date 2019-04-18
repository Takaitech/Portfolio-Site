$(function() {


	$.scrollify({
		section:".page",
		//sectionName:false,
		scrollSpeed:1100,
		after:function(i) {
    }
	});

	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();


	});
});
