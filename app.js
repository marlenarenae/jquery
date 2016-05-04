$(document).ready(function() {
//Make background red
	$(document).on("click", "#change-red", function() {

    	$(".changing-divs:first")
    		.css("background-color", "red");		

	});
//Make background green

	$(document).on("click", "#change-green", function() {

	    	$(".changing-divs:nth(1)")
	    		.css("background-color", "green");
	    		

		});

//Make background blue

	$(document).on("click", "#change-blue", function() {

	    	$(".changing-divs:nth(2)")
	    		.css("background-color", "blue");
    		

	});

//Make div bigger and background red

	$(document).on("click", "#make-big", function() {

    	$(".changing-divs:nth(3)")
    		.css("background-color", "red")
    		.css("width", "380px")		
    		.css("height", "380px");

	});

//Make div smaller and background green

	$(document).on("click", "#make-small", function() {

    	$(".changing-divs:nth(4)")
    		.css("background-color", "green")
    		.css("width", "280px")		
    		.css("height", "220px");

	});

	$(document).on("click", "#animate-div", function() {

    	$(".changing-divs:last")
    		.css("background-color", "blue")
    		.animate({height: 300}, "slow")
    		.animate({width: 300}, "slow")
            .animate({height: 100}, "slow")
            .css("transform", "translate 100px", "rotate(180deg");

    		

	});



});