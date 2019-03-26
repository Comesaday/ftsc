$(document).ready(function(){
	
	$(".subnav ul li").mouseover(function(){
		$(this).css("background","white");
		$(this).children().css("color","black");
	});
	
	$(".subnav ul li").mouseout(function(){
		$(this).css("background","#308ACE");
		$(this).children().css("color","white");
	});
	
	$(".slide h2").click(function(){
		 $(this).next().slideToggle(200);	
	});
	
	$("#login").click(function(){
		$(".org").hide();
		$(".catagory").hide();
		$(".about").show();
	});
	
	$("#reg").click(function(){
		$(".org").hide();
		$(".catagory").hide();
		$(".about").show();
	});
	
	$("#susc").click(function(){
		$(".org").show();
		$(".catagory").show();
		$(".about").show();
	});
	
	$("#us").click(function(){
		$(".org").hide();
		$(".catagory").hide();
		$(".about").show();
	});
	
	$("#index").click(function(){
		$(".org").show();
		$(".catagory").show();
		$(".about").show();
	});
});
