$(document).ready(function(){
	$('#imagens ul').cycle({
		fx: 'all',
		speed: 2000,
		timeout: 5000,
		next: '#prox',
		prev:'#ant',
	});
});