$( document ).ready(function() {
    


	var app = document.getElementById('typewriter');

	var typewriter = new Typewriter(app, {
	  loop: true
	});

	typewriter
	  .pauseFor(2500)
	  .typeString('Hello there')
	  .pauseFor(300)
	  .deleteChars(10)
	  .typeString('I am a programmer')
	  .typeString('I am currently learning Java')
	  .pauseFor(1000)
	  .start();

 });