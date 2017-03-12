$(document).ready(function(){



	$('.teste').mouseover(function(){
		$(this).css({
			/*'opacity':'0.30',*/
			'filter':'brightness(52%)',
			'padding':'0',
		});
		$('p').css({
			'font-size':'100px',
		});
	});
	$('.teste').mouseout(function(){
		$(this).css({
			'opacity':'1',
			'filter':'brightness(100%)',
		});
		$('p').css({
			'font-size':'60px',
		});
	});

	
});
