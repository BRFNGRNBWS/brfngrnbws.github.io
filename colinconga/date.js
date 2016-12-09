function getVirtualDirectory() {
  var vDir = document.location.pathname.split('/');
  return '/' + vDir[1] + '/';
}

function include_jQueryFilesToPage() {
  var siteAddress = location.protocol + '//' + document.location.hostname + getVirtualDirectory(); 
  var jqCSSFilePath = 'style.css';
  var jqUIFilePath = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js';
  var head  = document.getElementsByTagName('head')[0]; 

  // jQuery CSS jnclude
  var jqCSS = 'cssIDJQ';  // you could encode the css path itself to generate id.
  if (!document.getElementById(jqCSS)) { 
    var link  = document.createElement('link'); 
    link.id  = jqCSS; 
    link.rel  = 'stylesheet'; 
    link.type = 'text/css'; 
    link.href = jqCSSFilePath; 
    link.media = 'all'; 
    head.appendChild(link); 
  } 

  // Core jQuery include
  var jqc = "coreFileRefIDJQ";  
  if (!document.getElementById(jqc)) 
    document.write('<scr' + 'ipt type="text/javascript" id="' + jqc + '" src="' + jqCoreFilePath + '"></scr' + 'ipt>');

  // jQueryUI include
  var jqUI = "uiFileRefIDJQ";  
  if (!document.getElementById(jqUI)) 
    document.write('<scr' + 'ipt type="text/javascript" id="' + jqUI + '" src="' + jqUIFilePath + '"></scr' + 'ipt>');
}

include_jQueryFilesToPage();

$(document).ready(function() {
  setInterval(function(){currentTime("#idTimeField")}, 500);
});


function currentTime(field) {
  var now = new Date();
  now = (now.getHours() * 10) + ', ' + (now.getMinutes() * 4) + ', ' + (now.getSeconds() * 4);
  $(field).val(now);
  $('body').css('background-color', "rgb(" + now + ")");

}
