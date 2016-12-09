$(document).ready(function() {
setInterval(function(){currentTime("#idTimeField")}, 500);
});
function currentTime() {
var now = new Date();
var R = (now.getHours() * 10) ;
var G = (now.getMinutes() * 4) ;
var B = (now.getSeconds() * 4);
document.body.style.backgroundColor = 'rgb(' + [R,G,B].join(',') + ')';
}