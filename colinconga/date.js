

$(document).ready(function() {
  setInterval(function(){currentTime("#idTimeField")}, 500);
});


function currentTime(field) {
  var now = new Date();
  var color = (now.getHours() * 10) + ', ' + (now.getMinutes() * 4) + ', ' + (now.getSeconds() * 4);
  $(field).val(now);
  $('body').css('background-color', "rgb(" + color + ")");

}
