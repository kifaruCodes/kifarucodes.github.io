// splash screen
$(window).on('load', function() {
	// Animate loader off screen
	$("#splash_screen").addClass("animated slideOutUp");;
});

$( document ).ready(function() {
    
	

	// Typewriter effect
		var app = document.getElementById('typewriter');
		var typewriter = new Typewriter(app, {
		  loop: true
		});

		var string1 = "Hello there";
		var string2 = "Welcome to my portfolio";
		var string3 = "I am a software engineer who uses software to solve real world problems";

		typewriter

		  .typeString(string1)
		  .pauseFor(500)
		  .deleteChars(string1.length)

		  .typeString(string2)
		  .pauseFor(500)
		  .deleteChars(string2.length)

		  .typeString(string3)
		  .pauseFor(500)
		  .deleteChars(string3.length)

		  .start();

	// scroll to top
		$(window).scroll(function(){
		    if ($(this).scrollTop() > 100) {
		        $('#scroll-to-top').fadeIn();
		    } else {
		        $('#scroll-to-top').fadeOut();
		    }
		});
		$('#scroll-to-top').click(function(){
		    $("html, body").animate({ scrollTop: 0 }, 600);
		    return false;
		});

	// scroll to section
		$('a[href*="#"]:not([href="#"])').click(function() {
		  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		    var target = $(this.hash);
		    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		    if (target.length) {
		      $('html, body').animate({
		        scrollTop: target.offset().top
		      }, 1000);
		      return false;
		    }
		  }
		});

 });