//Thanks to MeowMeowMeow for Chat Counter

var chatareas = document.getElementsByClassName('compose');
var theChatArea = chatareas[0];
var theChatBox = document.getElementById('Compose');
theChatBox.setAttribute("maxlength", "255");
theChatArea.innerHTML += '<div style="float:right;"><span id="chatcounter" style="font-size:10px;font-weight:900;"><span id="chatchars">255</span> Character(s) Remaining</span></div><br />';
var ChatCount = document.getElementById('chatcounter');


var chatmaxLength = 255;
$('#Compose').keyup(function() {
  var textlen = chatmaxLength - $(this).val().length;
  $('#chatchars').text(textlen);
  if ($(this).val().length >= chatmaxLength-50) {
	ChatCount.style.color = "yellow";
	if ($(this).val().length >= chatmaxLength-30) {
		ChatCount.style.color = "orange";
		if ($(this).val().length >= chatmaxLength-10) {
			ChatCount.style.color = "red";
			}
		}
	} else {
	ChatCount.style.color = "white";
	}
});