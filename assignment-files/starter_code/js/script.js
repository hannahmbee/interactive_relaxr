$(document).ready(function() {

	//Prevent form submission w/ event.preventDefault()//

//Really stuck on how to do this? There doesn't seem to be a form to .preventDefault() on? Or do I need to make one?//

	/*User clicks "Read More" on primary column
		Then show <p> tag and "Read Less" by sliding down
		Hide "Read More"*/

	$('.readmore').click(function() {
		$('#show-this-on-click').slideDown();
		$('.readmore').hide();
		$('.readless').show();
	})

	/*User clicks "Read Less" on primary column
		Then hide <p> and "Read Less" by sliding up
		Show "Read More"*/

	$('.readless').click(function() {
		$('#show-this-on-click').slideUp();
		$('.readmore').show();
		$('.readless').hide();
	})

	/*User clicks "Learn More" on side column
		Then show <p> tag and "Read Less" by sliding down
		Hide "Learn More"*/

	$('.learnmore').click(function() {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	})




});
