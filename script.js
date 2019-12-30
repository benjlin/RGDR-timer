console.log("Script Ran");

var timedisplay = document.getElementById("timer");

var BensTime = document.getElementById("BensTime");
var DansTime = document.getElementById("DansTime");
var JamesTime = document.getElementById("JamesTime");

var start = Date.now();
var timer; 
var timerpaused = true;
var delta = 0;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) { // Spacebar
        if(timerpaused) { 
            start = new Date (Date.now() - delta);
            console.log(start);
            timer = setInterval(function(){
                timedisplay.innerHTML = rendertimer();
            }, 10);
            timerpaused = false; 

        } else {
            clearInterval(timer);
            timerpaused = true; 
        }
    }

    if(event.keyCode == 39) { // Right Arrow
        BensTime.innerHTML = "<p><b>Ben</b> <br /> " + rendertimer() + "</p>"
    } 

    if(event.keyCode == 38 ) { // Up Arrow
        DansTime.innerHTML = "<p><b>Dan</b> <br /> " + rendertimer() + "</p>"
    }

    if(event.keyCode == 40 ) { // Down Arrow
        JamesTime.innerHTML = "<p><b>James</b> <br /> " + rendertimer() + "</p>"
    }
});

function rendertimer() {
    delta = Date.now() - start; 
    var milliseconds = parseInt((delta % 1000) / 1),
    seconds = Math.floor((delta / 1000) % 60),
    minutes = Math.floor((delta / (1000 * 60)) % 60),
    hours = Math.floor((delta / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    //timedisplay.innerHTML =  hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}