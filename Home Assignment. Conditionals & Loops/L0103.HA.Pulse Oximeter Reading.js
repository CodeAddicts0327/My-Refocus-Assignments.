// You are asked to develop a JavaScript app compatible with smartwatches. 
// You use the sensor data of its pulse oximeter to tell a user that their oxygen level is normal or alarming.
// Write a function that alerts a user of their oxygen saturation.

// Oxygen Saturation SpO2 :  Observation    
// >= 96 % : Normal reading.
// 95% : Acceptable to continue home monitoring.
// 93-94% Seek advice from health professionals.
// <=92% Seek urgent medical advice.

var pulse = 96

function pulseAlert(pulse){
    if (pulse >= 96){
        console.log("Normal REading.");
    } else if (pulse == 95 ){
        console.log("Acceptable to continue home monitoring.");
     } else if (pulse == 93 || (pulse == 94)){
        console.log("Seek advice from health professionals.");
    } else if (pulse <= 92 ){
        console.log("Seek urgent medical advice.");
    }
}



  pulseAlert(pulse);

