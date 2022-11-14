// Declare the function.
// Use the formula K = 5/9(F + 459.67) 

function convertToKelvin(tempFahrenheit){
    let tempKelvin = ((tempFahrenheit-32) * 5/9 + 273.15);
    return tempKelvin;
}

console.log(convertToKelvin(84)) // 84 F = 302.039 K
console.log(convertToKelvin(95)) // 95 F = 308.15 K


