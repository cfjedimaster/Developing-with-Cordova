cordova.define("org.apache.cordova.speech.speechsynthesis.SpeechSynthesisUtterance", function(require, exports, module) {var SpeechSynthesisUtterance = function() {
    this.text;
    this.lang;
    this.voiceURI;
    this.volume;
    this.rate;
    this.pitch;

    this.onstart = null;
    this.onend = null;
    this.onerror = null;
    this.onpause = null;
    this.onresume = null;
    this.onmark = null;
    this.onboundary = null;
};

module.exports = SpeechSynthesisUtterance;
});
