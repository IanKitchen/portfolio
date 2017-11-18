

$(document).ready(function(){

	$("#Index").click(function(){
		window.location.href = "index.html";
	});

	$("#Hello").click(function(){
		window.location.href = "index.html";
	});

	//pages
	$("#Portfolio").click(function(){
		window.location.href = "portfolio.html";
	});

	$("#CV").click(function(){
		window.location.href = "cv.html";
	});
	
	$("#Contact").click(function(){
		window.location.href = "contact.html";
	});

	$("#activityView").hide();
	$("#framework").hide();
	$("#principles").hide();
	$("#backButton").hide();
	
	//back button
	$("#backButton").click(function(){
		$("#framework").fadeOut("slow");
		$("#activityView").fadeOut("slow");
		$("#principles").fadeOut("slow");
		$("#thumbnails").fadeIn("slow");
	});
	
	//activity view	
	$("#activityViewThumb").click(function(){
		$("#thumbnails").hide();
		$("#backButton").fadeIn("slow");
		$("#activityView").fadeIn("slow");
	});
	
	//framework
	$("#frameworkThumb").click(function(){
		$("#thumbnails").hide();
		$("#backButton").fadeIn("slow");
		$("#framework").fadeIn("slow");
	});

	//principles
	$("#principlesThumb").click(function(){
		$("#thumbnails").hide();
		$("#backButton").fadeIn("slow");
		$("#principles").fadeIn("slow");
	});

});



