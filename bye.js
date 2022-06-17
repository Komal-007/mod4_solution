(function (window){
    var SpeakGoodBye={};
    SpeakGoodBye.speakword="Good Bye"
    SpeakGoodBye.speak=function (names){
        console.log(SpeakGoodBye.speakword +  " " + names);
    }
    window.SpeakGoodBye=SpeakGoodBye;
})(window);