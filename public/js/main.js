$(function() {
	$("div.b-slider").myslider();
	$("#gotop").scrollGoTop();
	
});




$(function() {
	
	$('#name').blur(function() {
		if ($(this).val().length == 0) {
			$(this).addClass('error');
		}
	});
	
	$('#name').focus(function() {
		$(this).removeClass('error');
	});

	
	
});
