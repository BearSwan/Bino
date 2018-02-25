$(document).ready(function(){
	$('.js-hero_slider').slick({
		nextArrow: '.b-hero-slider_next',
		prevArrow: '.b-hero-slider_prev'
	})

	$('.js-services_slider').slick({
		dots: true,
		arrows: false,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		verticalSwiping: true
	})
});