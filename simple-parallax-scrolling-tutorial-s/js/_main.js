 /**
 * This demo was prepared for you by Petr Tichy - Ihatetomatoes.net
 * Want to see more similar demos and tutorials?
 * Help by spreading the word about Ihatetomatoes blog.
 * Facebook - https://www.facebook.com/ihatetomatoesblog
 * Twitter - https://twitter.com/ihatetomatoes
 * Google+ - https://plus.google.com/u/0/109859280204979591787/about
 * Article URL: http://ihatetomatoes.net/simple-parallax-scrolling-tutorial/
 */

( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slidezero = $('.homeSlideZero');
	$slidetwo = $('.homeSlideTwo');
	$slideone = $('.homeSlideOne');
	$slidethree = $('.homeSlideThree');
	$slidefour = $('.homeSlideFour');
	$slidefive = $('.homeSlideFive');

	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slidezero.height(20*winH/100);
	    $slideone.height(55*winH/100);
	    $slidetwo.height(25*winH/100);	    
	    $slide.height(5*winH/10);
	    $slidethree.height(5*winH/10);
	    $slidefive.height(5*winH/10);
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
	}
		
} )( jQuery );