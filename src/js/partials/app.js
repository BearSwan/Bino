$(document).ready(function(){
	$('.js-hero_slider').slick({
		nextArrow: '.b-hero-slider_next',
		prevArrow: '.b-hero-slider_prev'
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
	})
});

//TODO: background move on mouseover
