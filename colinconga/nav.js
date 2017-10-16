String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'))

var navtxt = 
'<li id="mobilenav">Hello Testing</li>' +
'<li id="nav"><a href="index.html">Home</a></li>' +
'<li id="nav"><a href="art/index.html">Art</a></li>' +
'<li id="nav"><a href="games.html">Games</a></li>' + 
'<li id="nav"><a href="wish.html">Wish List</a></li>' +
'<li id="nav"><a href="dw.html">Doctor Who</a></li>';

if(dir.indexOf('/art') != -1){
	navtxt = navtxt.replaceAll('href="', 'href="../');
}

document.getElementById("navcontain").innerHTML = navtxt;
