/**

 * add touch capability to titles
 
**/
$(function() {

		mobileTouch();

	});

function mobileTouch(){
	 		
			$("#main .title").click(function(){
				$(this).nextAll(".reveal").toggleClass( "open" );
			});
}


$('#nav-bar').scrollspy();
$('#scheduleAlert').modal();


























