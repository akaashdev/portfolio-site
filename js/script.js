/******************************************************************************************************************************
Waypoints
*******************************************************************************************************************************/ 

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
		$('.projects-card').each(function(index, item) { manageItemAnimation(item, manageProjectItem(index, item)) });
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
		$('.work-card').each(function(index, item) { manageItemAnimation(item, manageWorkItem(index, item)) });
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
		$('.progress-wrap').each(function(index, item) { manageItemAnimation(item, manageSkillItem(index, item)) });
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
		$('.contact-detail').addClass('animated fadeInLeft');
		$('.contact-img').addClass('animated fadeInRight');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});


	function manageItemAnimation(item, animation) {
		item.classList.add('animated');
		animation;
	}

	function manageSkillItem(index, item) {
		index % 2 ? item.classList.add('fadeInRight') : item.classList.add('fadeInLeft');
		item.style.animationDelay = (Math.trunc(index / 2) * 0.5) + 's';
	}

	function manageWorkItem(index, item) {
		item.classList.add('zoomIn');
		item.classList.add('fadeIn');
		item.style.animationDelay = (index * 0.4) + 's';
	}

	function manageProjectItem(index, item) {
		index % 2 ? item.classList.add('fadeInRight') : item.classList.add('fadeInLeft');
		item.style.animationDelay = (index * 0.4) + 's';
	}

});

/******************************************************************************************************************************
Nav Button
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});


$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 125
				}, 1000);
				return false;
			}
		}
	});

});

/******************************************************************************************************************************
Nav Transform
*******************************************************************************************************************************/ 

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/******************************************************************************************************************************
Flexsliders
*******************************************************************************************************************************/ 

$(window).load(function() {

	$('#blogSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});
	
		$('#clientSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

