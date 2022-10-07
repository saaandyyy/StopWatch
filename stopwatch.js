window.onload = function () {
    var second = 00;
    var milliSec = 00;
    var appendMilli = document.getElementById("milliSec");
    var appendSec = document.getElementById("second");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
        milliSec = "00";
        second = "00";
        appendMilli.innerHTML = milliSec;
        appendSec.innerHTML = second;
    }

    function startTimer () {
        milliSec++;

        if(milliSec <= 9){
            appendMilli.innerHTML = "0" + milliSec;
        }
        if(milliSec > 9){
            appendMilli.innerHTML = milliSec;
        }
        if(milliSec > 99){
            console.log("second");
            second++;
            appendSec.innerHTML = "0" + second;
            milliSec = 0;
            appendMilli.innerHTML = "0" + 0;
        }
        if(second > 9){
            appendSec.innerHTML = second;
        }
    }


}