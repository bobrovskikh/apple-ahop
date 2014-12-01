$(function() {
	$.fn.scrollGoTop = function() {
	
		if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");

		var scrollDiv = $(this);

		$(window).scroll(function() {
			if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
			else $(scrollDiv).fadeIn("slow")
		});

		$(this).click(function() {
			$("html, body").animate({scrollTop: 0}, "slow")
		})
	}
});