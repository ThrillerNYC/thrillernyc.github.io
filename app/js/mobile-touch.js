/**

 * add touch capability to titles
 
**/
$(function() {

		mobileTouch();

	});

function mobileTouch(){
	 		
			$("#main .title").click(function(){
				$cntr = $(this).nextAll(".reveal");
				if ($(this).nextAll(".reveal").css("display") == "block") {
					$(this).nextAll(".reveal").css("display", "none");
				} else {
					$(this).nextAll(".reveal").css("display", "block");
				}
			});
}


$('#nav-bar').scrollspy();
$('#scheduleAlert').modal();


























