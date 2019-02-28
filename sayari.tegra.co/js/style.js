$(document).ready(function(){

	//Click to scroll easing
	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
		scrollTop: $(el).offset().top}, 2000);
		return false;
		});

		//Hamburger mobile
		$('.menu-burger, .menu-items').on('click', function() {
			$('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
			$('.home-right, .form-slide').toggleClass('opacity0');
			$('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
		  });


		//Click anchor link easing 
		  $('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000);
				return false;
			  }
			}
		  });

		  //Bind two forms
		  $('#emaila').change(function() {
			$('#email').val($(this).val());
	  });

	  //Enter keypress nex input
	  $('input').keydown(function (e) {
		if (e.which === 13) {
			var index = $('input').index(this) + 1;
			$('input').eq(index).focus();
		}
	});

		//Reveal on scroll
		window.sr = new ScrollReveal()
		sr.reveal('.scrollreveal', { distance: '20px', duration: 1000, })
		sr.reveal('.scrollrevealdelay', { distance: '20px', duration: 1200, delay: 1400})
		sr.reveal('.scrollrevealdelay2x', { distance: '40px', duration: 1400, delay: 1800})
		sr.reveal('.scrollrevealreset', { distance: '20px', duration: 1000, reset: true})


		//Spinnumbers
		var show = true;
		var countbox = ".flex-number";
		$(window).on("scroll load resize", function(){
			if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height();        // Высота окна браузера
			var d_height = $(document).height();      // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
				$(".spincrement").spincrement({
					thousandSeparator: "",
					duration: 2400
				});
				show = false;
			}
		});

	setIntervalAndExecute(function () {
		var $this = $('#animation-text img');
		$this.css({'opacity': 0});
		$this.each(function (i) {
				$(this).delay((i++) * 100).fadeTo(400, 1);
		});
	});

	function setIntervalAndExecute(fn) {
		fn();
		return (fn);
	}

	const sleep = ms => new Promise(r => setTimeout(r, ms));

	const main = async () => {
		// Earth
		await anime({
			targets: `#Group_2 g`,
			opacity: [0, 1],
			duration: 100,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			delay: function(el, i) { return i * 20 },
			direction: 'normal',
		});
		await sleep(400);
		// Yellow Dots
		await anime({
			targets: '#marks g',
			opacity: [0, 1],
			duration: 4000,
		})
		await sleep(1000);
		// Blue lines
		await anime({
			targets: 'g#Vector_53 path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 200,
			opacity: 1,
			delay: function(el, i) { return i * 10 },
			direction: 'normal',
		});
		await sleep(1000);
		// Lines with arrows with no bugs
		await anime({
			targets: '#Line_9, #Line, #Line_2, #Line_3, #Line_4',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeOutExpo',
			opacity: {
				duration: 0,
				value: 1
			},
			duration: 1500,
			direction: 'normal',
		});
		// Buggy lines with arrows
		await anime({
			targets: '#Line_8, #Line_5, #Line_7',
			strokeDashoffset: [anime.setDashoffset, 150],
			easing: 'easeOutExpo',
			duration: 1500,
			opacity: {
				duration: 0,
				value: 1
			},
			direction: 'normal',
		});
		await anime({
			targets: '#Line_6',
			strokeDashoffset: [anime.setDashoffset, 40],
			easing: 'easeOutExpo',
			duration: 500,
			opacity: {
				duration: 0,
				value: 1
			},
			direction: 'normal',
		});
		await sleep(1000);
		await anime({
			targets: '#Arrow, #Arrow_1, #Arrow_2, #Arrow_3, #Arrow_4, #Arrow_5, #Arrow_6',
			strokeDashoffset: [anime.setDashoffset, 150],
			easing: 'easeOutExpo',
			duration: 1500,
			opacity: {
				duration: 0,
				value: 1
			},
			direction: 'normal',
		})
	}
	$('body').scroll(function() {
		var scrolledTop = $('body').scrollTop();
		var offset = $('.home').height();
		var distance = scrolledTop > offset - offset * 0.2;

		if (distance) {
			console.log('triggered');

			if (!window.planetRun) {
				window.planetRun = true;
				
				main();
			}
		} else {
			if (window.planetRun) {
				window.planetRun = false;
			}
		}
	});

	var stopss = 0;
	function start_animate() {
		var $post = $(".classanimate");
		setInterval(function(){
		$post.toggleClass("classanimate1");
		}, 10000);
	}

	var lineDrawing = anime({
		targets: '.lineDrawing path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 1500,
		delay: function(el, i) { return i * 250 },
		direction: 'alternate',
		loop: true
	});
	
});




