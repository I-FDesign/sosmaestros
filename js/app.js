$(document).ready(function(){

	//Fix menu------------------------------------
	var arefix = false;
	$(document).scroll(function(){
		var scrolled = $(document).scrollTop();
		if(scrolled > 75){
			$('header').addClass('fixed');
			arefix = true;
		}else{
			if(arefix === true){
				$('header').removeClass('fixed');
			}
		}
	});

	//---------------------------------------------

	//Menu_Mobile----------------------------------

	$('.bars i').on('click', function(){
		$('.black').css('display', 'block');
		$('.options').animate({
			marginRight : 0},
			400);
	});

	$('.options .cross i').on('click', function(){
		var width = $('.options').css('width');
		width = parseInt(width) * -1;
		$('.black').css('display', 'none');
		$('.options').animate({
			marginRight : width},
			400);
	});

	//---------------------------------------------
});