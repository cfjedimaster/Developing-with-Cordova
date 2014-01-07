
document.addEventListener('deviceready', init, false);

function init() {
    console.log('New init');
    var u = new SpeechSynthesisUtterance();
    u.text = "Ready to speak.";
    u.lang = 'en-US';
    speechSynthesis.speak(u);

	var textField = document.querySelector("#text");

	document.querySelector("#doSpeak").addEventListener("touchend", function() {
		var text = textField.value;
		var u = new SpeechSynthesisUtterance();
		u.text = text;
		u.lang = 'en-US';
		speechSynthesis.speak(u);
		
	},false);
}
