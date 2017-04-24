$(document).ready(function() {
	$('ul li').mouseenter(function() {
		$(this).fadeTo(100, 0.25);
	});

	$('ul li').mouseleave(function() {
		$(this).fadeTo(100, 1.0);
	});

	$('ul li').on('click', function() {
		$(this).text('Clicked!');
		if ($(this).css("color") === 'rgb(0, 128, 0)') {
			$(this).css({"background-color": "yellow",
						"color" : "black"
						});
		} else {
		$(this).css({"color": "green",
					 "background-color": "#DE5A51"});
		};
	});

	$('div').on('click', function() {
		if ($(this).hasClass('bigBox')) {
			$(this).fadeOut(0).removeClass('bigBox').addClass('littleBox').fadeIn(1500);
		} else {
			$(this).fadeOut(0).removeClass('littleBox').addClass('bigBox').fadeIn(1500);
		};
	});
});