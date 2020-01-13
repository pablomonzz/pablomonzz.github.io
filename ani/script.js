// JavaScript Document
$(window).scroll(function(){
	
	if ($(".uno").visible(true)) {
		$(".caja1").addClass("visible")
	}
	else{
		$(".caja1").removeClass("visible");
	}
	
	if ($(".dos").visible(true)) {
		$(".caja2").addClass("visible")
	}
	else{
		$(".caja2").removeClass("visible");
	}
	if ($(".tres").visible(true)) {
		$(".caja3").addClass("visible")
	}
	else{
		$(".caja3").removeClass("visible");
	}
	if ($(".cuatro").visible(true)) {
		$(".caja4").addClass("visible")
	}
	else{
		$(".caja4").removeClass("visible");
	}
	if ($(".cinco").visible(true)) {
		$(".caja5").addClass("visible")
	}
	else{
		$(".caja5").removeClass("visible");
	}
	
});