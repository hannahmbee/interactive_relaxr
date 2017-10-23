$(document).ready(function() {

	//Prevent form submission w/ event.preventDefault()//

	/*User clicks "Read More" on primary column
		Then show <p> tag and "Read Less" by sliding down
		Hide "Read More"*/

	$('.readmore').click(function(event) {
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readmore').hide();
		$('.readless').show();
	})

	/*User clicks "Read Less" on primary column
		Then hide <p> and "Read Less" by sliding up
		Show "Read More"*/

	$('.readless').click(function(event) {
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
		$('.readless').hide();
	})

	/*User clicks "Learn More" on side column
		Then show <p> tag and "Read Less" by sliding down
		Hide "Learn More"*/

	$('.learnmore').click(function(event) {
		event.preventDefault()
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	})




});
