var cursorX;
var cursorY;
var relativeX;
var relativeY;
var newRot;
var imgFromTop;
var winWid;
var winHei;
var inter;
var negX;
var negY;

function sliderOut(val){
	$("#sliderout").html(val);
	$("#shad0, #shad1").css("width", (val / 2) + "vw");
	$("#img").css("width", val + "vw");
	
	$("#shad0").css("left", $("img").offset().left);
	$("#shad1").css("left", $("img").offset().left + ($("#img").width() / 2));
	$("#shad0, #shad1").css("top", $("#img").offset().top + ($("#img").height() * 0.282606202));
	$("#mask").css("height", $("#img").offset().top + ($("#img").height() * 0.282606202));
}

function triangle(sideX, sideY){
	var tang = sideY / sideX;
	var radi = Math.atan(tang);
	var degr = deg(radi);
	if(degr < 0){
		return (-90 - degr);
	}else{
		return (90 - degr);
	}
}

function deg(radians){
	return radians * (180/Math.PI);
}

document.onmousemove = function(e){
	cursorX = e.pageX;
	cursorY = e.pageY;
	
	relativeY = -1 * (cursorY - (winHei / 2));
	relativeX = cursorX - (winWid / 2);
	newRot = triangle(relativeX, relativeY);
	
	if(newRot <= 43.6 && newRot >= -43.6){
		$("#shad0, #shad1").css("transform", "rotate(" + newRot + "deg)");
	}
}

$(document).ready(function(){
	$("#shad0").css("left", $("img").offset().left);
	$("#shad1").css("left", $("img").offset().left + ($("#img").width() / 2));
	$("#shad0, #shad1").css("top", $("#img").offset().top + ($("#img").height() * 0.282606202));
	$("#mask").css("height", $("#img").offset().top + ($("#img").height() * 0.282606202));
	
	winWid = $(window).width();
	winHei = $(window).height();
	
	$("#menu").hide();
	$("#sliderout").html(20);
});

$(window).on('resize', function(){
	$("#shad0").css("left", $("img").offset().left);
	$("#shad1").css("left", $("img").offset().left + ($("#img").width() / 2));
	$("#shad0, #shad1").css("top", $("#img").offset().top + ($("#img").height() * 0.282606202));
	$("#mask").css("height", $("#img").offset().top + ($("#img").height() * 0.282606202));
	
	winWid = $(window).width();
	winHei = $(window).height();
});
		
		
//custom right click menu

if (document.addEventListener) { // IE >= 9; other browsers
	document.addEventListener('contextmenu', function(e) {
		$("#menu").css("top", e.pageY);
		$("#menu").css("left", e.pageX);
		$("#menu").finish().toggle(100);
		e.preventDefault();
	}, false);
} else { // IE < 9
	document.attachEvent('oncontextmenu', function() {
		alert("You've tried to open context menu");
		window.event.returnValue = false;
	});
}

$(document).bind("mousedown", function (e) {
	// If the clicked element is not the menu
	if (!$(e.target).parents("#menu").length > 0) {
		// Hide it
		$("#menu").hide(100);
	}
});
