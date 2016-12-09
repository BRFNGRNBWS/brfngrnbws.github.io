$(document).ready(function() {
    setInterval(function(){currentTime("#idTimeField")}, 500);
});
function currentTime(field) {
    var now = new Date();
    now = (now.getHours() * 10) + ', ' + (now.getMinutes() * 4) + ', ' + (now.getSeconds() * 4);
    $(field).val(now);
}

document.getElementsByName("html").style.backgroundColor = "rgb(" + now + ")";
