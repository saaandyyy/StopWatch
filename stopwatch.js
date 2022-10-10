/* selecting the Html element with the help of Selector */
window.onload = function () {
    var second = 00;  // Assingning the variable second with the value 00
    var milliSec = 00;  // Assingning the variable milliSec with the value 00
    var appendMilli = document.getElementById("milliSec");
    var appendSec = document.getElementById("second");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    /* Function for after clicking on Start button */
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    /* Function for after clicking on Stop button */
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    /* Function for after clicking on Reset button */
    buttonReset.onclick = function() {
        clearInterval(Interval);
        milliSec = "00";
        second = "00";
        appendMilli.innerHTML = milliSec;
        appendSec.innerHTML = second;
    }

    /* Function for Timer */
    function startTimer () {
        milliSec++;

        if(milliSec <= 9){  // When MilliSecond will show the number less or equal to 9
            appendMilli.innerHTML = "0" + milliSec;
        }
        if(milliSec > 9){  // When MilliSecond will show the number greater to 9
            appendMilli.innerHTML = milliSec;
        }
        if(milliSec > 99){  // When MilliSecond will show the number greater to 99
            console.log("second");
            second++;
            appendSec.innerHTML = "0" + second;
            milliSec = 0;
            appendMilli.innerHTML = "0" + 0;
        }
        if(second > 9){  // When Second will show the number greater to 9
            appendSec.innerHTML = second;
        }
    }


}