$(document).ready(function(){
	$(window).scroll(function(){
		var sticky = $('.b-header'),
			scroll = $(window).scrollTop();

		if (scroll >= $(window).height()) sticky.addClass('m-sticky');
		else sticky.removeClass('m-sticky');
	});

	/*anchors*/
	$('a[href^="#"]').click(function () {
		var el = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(el).offset().top
		}, 700);
	});

	$('.js-services_slider').slick({
		dots: true,
		arrows: false,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		verticalSwiping: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});

	$('.js-study_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				dots: false
				}
			}
		]
	});

	//simple parallax effect on mouse move
 	$('.b-team').mousemove(function(e){
		var pageX;
		var pageY;
		var amountMovedX = (e.pageX * -1 / 10);
		var amountMovedY = (e.pageY * -1 / 10);
		$(this).css('background-position',amountMovedX+'px '+amountMovedY+'px');
	});
});
