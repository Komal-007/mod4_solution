(function (window){
    var hellospeaker={};
    hellospeaker.speakword="Hello"
    hellospeaker.speak=function (names){
        console.log(hellospeaker.speakword + " " + names);
    }
    window.hellospeaker=hellospeaker;
})(window);