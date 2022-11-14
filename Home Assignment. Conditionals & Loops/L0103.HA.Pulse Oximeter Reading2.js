// Continue with the last task, and provide more observations based on the pulse rate.

// Pulse Rate, beats per minute : Observation

// 40 - 100  : Normal Reading
// 101 - 109 : Acceptable to continue home monitoring.
// 110 - 130 : Seek advice from health professionals.
// >= 131    : Seek Urgent medical advice.

var pulse = 131

 function pulseRate(pulse){
    if  ( (pulse >= 40) &&  (pulse <= 100) ){
        console.log("Normal Reading");
    } else if ( (pulse >= 101) &&  (pulse <= 109) ){
        console.log("Acceptable to continue home monitoring.");
    } else if ( (pulse >= 110) &&  (pulse <= 130) ){
        console.log("Seek advice from health professionals.");
    } else
        console.log("Seek Urgent medical advice.");
    }


 pulseRate(pulse);

