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
var shadWid = 10;

function sliderOut(val){
	shadWid = val / 2;
	$("#sliderout").html(val);
	$("#shad0, #shad1").css("width", (val / 2) + "vw");
	$("#img").css("width", val + "vw");
	
	$("#shad0").css("left", $("img").offset().left);
	$("#shad1").css("left", $("img").offset().left + ($("#img").width() / 2));
	$("#shad0, #shad1").css("top", $("#img").offset().top + ($("#img").height() * 0.282606202));
	$(".0").css("height", $("#img").offset().top + ($("#img").height() * 0.282606202));
	
	$(window).trigger("mousemove");
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

$(window).on("mousemove", function(e){
	cursorX = e.pageX;
	cursorY = e.pageY;
	
	relativeY = -1 * (cursorY - (winHei / 2));
	relativeX = cursorX - (winWid / 2);
	newRot = triangle(relativeX, relativeY);
	if(relativeY <= 0){
		if(newRot < 0){
			newRot = -1 * ((-90 - newRot) - 90);
		}else{
			newRot = -1 * ((90 - newRot) + 90);
		}
	}
	
	if(newRot <= 43.6 && newRot >= -43.6){
		$("[id=mask]").hide();
		$(".0").show();
		$("#shad0").css("left", $("img").offset().left);
		$("#shad1").css("left", $("img").offset().left + (winWid * (shadWid / 100)));
		$("#shad0, #shad1").css("top", $("#img").offset().top + ($("#img").height() * 0.282606202));
	}else if(newRot < -43.6 && newRot >= -90){
		$("[id=mask]").hide();
		$(".1L").show();
		$("#shad0").css("top", $("img").offset().top + $("img").height());
		$("#shad0").css("left", winWid / 2);
		$("#shad1").css("top", $("img").offset().top);
		$("#shad1").css("left", $("img").offset().left + ($("img").width() * 0.789536974) - (winWid * (shadWid / 100)));
	}else if(newRot > 43.6 && newRot <= 90){
		$("[id=mask]").hide();
		$(".1R").show();
		$("#shad0").css("top", $("img").offset().top);
		$("#shad0").css("left", $("img").offset().left + ($("img").width() * 0.210466439));
		$("#shad1").css("top", $("img").offset().top + $("img").height());
		$("#shad1").css("left", $("img").offset().left);
	}else if(newRot < -90 && newRot >= -136.5){
		$("[id=mask]").hide();
		$(".1L").show();
		$("#shad0").css("top", $("img").offset().top + $("img").height());
		$("#shad0").css("left", winWid / 2);
		$("#shad1").css("top", $("img").offset().top);
		$("#shad1").css("left", $("img").offset().left + ($("img").width() * 0.210466439) - (winWid * (shadWid / 100)));
	}else if(newRot > 90 && newRot <= 136.5){
		$("[id=mask]").hide();
		$(".1R").show();
		$("#shad0").css("top", $("img").offset().top);
		$("#shad0").css("left", $("img").offset().left + ($("img").width() * 0.789536974));
		$("#shad1").css("top", $("img").offset().top + $("img").height());
		$("#shad1").css("left", $("img").offset().left);
	}else if((newRot < -136.5 && newRot >= -180) || (newRot > 136.5 && newRot <= 180)){
		$("[id=mask]").hide();
		$("#shad0").css("left", $("img").offset().left + $("img").width());
		$("#shad1").css("left", $("img").offset().left - (winWid * (shadWid / 100)));
		$("#shad0, #shad1").css("top", $("#img").offset().top + ($("#img").height() * 0.282606202));
	}
	
	$("#shad0, #shad1").css("transform", "rotate(" + newRot + "deg)");
});

$(document).ready(function(){
	$("#shad0").css("left", $("img").offset().left);
	$("#shad1").css("left", $("img").offset().left + ($("#img").width() / 2));
	$("#shad0, #shad1").css("top", $("img").offset().top + ($("img").height() * 0.282606202));
	$(".0").css("height", $("img").offset().top + ($("img").height() * 0.282606202));
	
	winWid = $(window).width();
	winHei = $(window).height();
	
	$(".1L").css({
		width: "50%",
		height: "50%",
		bottom: "0",
		left: "0"
	});
	$(".1R").css({
		width: "50%",
		height: "50%",
		bottom: "0",
		right: "0"
	});
	$("#menu").hide();
	$("[id=mask]").hide();
	$(".0").show();
	$(".0").css("width", "100%");
	$("#sliderout").html(20);
});

$(window).on('resize', function(){
	$("#shad0").css("left", $("img").offset().left);
	$("#shad1").css("left", $("img").offset().left + ($("#img").width() / 2));
	$("#shad0, #shad1").css("top", $("#img").offset().top + ($("#img").height() * 0.282606202));
	$(".0").css("height", $("#img").offset().top + ($("#img").height() * 0.282606202));
	
	winWid = $(window).width();
	winHei = $(window).height();
	
	$(".0").css("width", "100%");
	$(".1L").css({
		width: "50%",
		height: "50%",
		bottom: "0",
		left: "0"
	});
	$(".1R").css({
		width: "50%",
		height: "50%",
		bottom: "0",
		right: "0"
	});
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
