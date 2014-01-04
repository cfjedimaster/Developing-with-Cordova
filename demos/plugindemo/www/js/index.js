
document.addEventListener('deviceready', init, false);

function init() {
    console.log('New init');
    var u = new SpeechSynthesisUtterance();
    u.text = "You know you're going to make the app say something naughty.";
    u.lang = 'en-US';
    speechSynthesis.speak(u);
    console.log('did my speaking');

speechSynthesis.speak(u);
        
}
