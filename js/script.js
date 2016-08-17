

$(document).ready(function(){

	$("#activityView").hide();

	$("#Contact").click(function(){
		window.location.href = "contact.html";
	});

	$("#CV").click(function(){
		window.location.href = "cv.html";
	});
	
	$("#Portfolio").click(function(){
		window.location.href = "portfolio.html";
	});

	$("#Index").click(function(){
		window.location.href = "index.html";
	});

	$("#Hello").click(function(){
		window.location.href = "index.html";
	});
	
	$("#frameworkThumb").click(function(){
		$("#activityView").fadeOut("slow");
		$("#activityView").hide();
		$("#framework").fadeIn("slow");
	});
	
	$("#activityViewThumb").click(function(){
		$("#framework").fadeOut("slow");
		$("#framework").hide();
		$("#activityView").fadeIn("slow");
	});
});


