

$(document).ready(function(){

	$("#Index").click(function(){
		window.location.href = "index.html";
	});

	$("#Hello").click(function(){
		window.location.href = "index.html";
	});

	$("#Portfolio").click(function(){
		window.location.href = "portfolio.html";
	});

	$("#activityView").hide();
	
	$("#frameworkThumb").click(function(){
		$("#thumbnails").fadeOut("slow");
		$("#thumbnails").hide();
		$("#activityView").fadeOut("slow");
		$("#activityView").hide();
		$("#framework").fadeIn("slow");
	});
	
	$("#activityViewThumb").click(function(){
		$("#framework").fadeOut("slow");
		$("#framework").hide();
		$("#activityView").fadeIn("slow");
	});

	$("#CV").click(function(){
		window.location.href = "cv.html";
	});
	
	$("#Contact").click(function(){
		window.location.href = "contact.html";
	});
});


