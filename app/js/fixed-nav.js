/**

 * Fixed menu when scrolling.
 
**/
$(function(){
		   $window=$(window);
		   $nav=$("#main-nav");
		   $class="floating_nav";
		   $link=$(".scroll-top");
		   $link.click(function(e){
									e.preventDefault();
									$("html, body").animate({scrollTop:0},"slow");
									if ("pushState" in history) {
										history.pushState("", document.title, window.location.pathname);
									}
								});
		   $window.scroll(function(){
								   if($window.scrollTop()<=450)
								   {
									   $nav.css('display','').removeClass($class);
									}else{
										$nav.addClass($class).fadeIn(500);
									}
								})
		  	});