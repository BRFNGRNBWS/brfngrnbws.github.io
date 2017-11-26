String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
var art = "";

var navtxt = 
'<li id="navtoggle"></li>' +
'<a href="index.html"><li id="nav">Home</li></a>' +
'<a href="art/index.html"><li id="nav">Art</li></a>' +
'<a href="games/index.html"><li id="nav">Games</li></a>' + 
'<a href="wish.html"><li id="nav">Wish List</li></a>' +
'<a href="dw.html"><li id="nav">Doctor Who</li></a>' + 
'<li id="nav" class="toggle" onclick="themeIs = !themeIs; doTheme();">Toggle Themes</li>';

if(dir.indexOf('/art') != -1 || dir.indexOf('/games') != -1){
	navtxt = navtxt.replaceAll('href="', 'href="../');
	art = "../"
	
}

document.getElementById("navcontain").innerHTML = navtxt;



var themeIs = true;

if(document.cookie.search("theme") != -1){
	themeIs = (document.cookie.substring(document.cookie.search("theme") + 6, document.cookie.search(";")) == "true");
}

doTheme()

function doTheme(){
	document.cookie = "theme=" + themeIs + "; path=/colinconga";
	
	if(themeIs){
		$("head link#themesheet").attr("href", art + "dark.css");
	}else{
		$("head link#themesheet").attr("href", art + "light.css");
	}
}

