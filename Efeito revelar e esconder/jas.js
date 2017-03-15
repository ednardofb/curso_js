$(document).ready(function(){
	$("#hidden_div").hide();
	$(".open_div").mouseover(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;

	});
	$("#hidden_div").mouseout(function(){
		$("#hidden_div").hide();
	});
	
	

});