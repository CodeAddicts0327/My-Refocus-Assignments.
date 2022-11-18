/* Calculation 1: Georgia's weight is 75 kg and her height is 165 cm what is Gerggia's BMI?


USE EnglishSystem or MetricSystem

CONVERSION:
Height:
foot 1 = 30.48 cm
foot 1 = inch 12
inch 1 =  cm 2.54

Weight:
kg 1 = lbs 2.20463

Metric System
weight (kg) / [height (m)]2
or
(weight/height/height)*10000;

English System
Formula: weight (lb) / [height (in)]2 x 703
or
(weight/height/height)*703

Georgia's Height and Weight 
Metric System               English System         
HEight : 165 cm            5'4 /  64 inches
Weight    75 kg            165.347 lbs

Georgia's BMI 
EnglishSystem = 28.3 BMI
MetricSystem  = 27.5 BMI

SOURCE//https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_2.html
*/


function BMi_calculator(Unit,weight,height){
    if(Unit=='Metric System'){ 
       BMI = (weight/height/height)*10000
   } else if(Unit=='English System'){
       BMI = (weight/height/height)*703
   }
     if(BMI<=18.5){
        console.log(`Under Weight: ${BMI.toFixed(2)}`)
    }   else if(BMI>18.5 && BMI<=25){
        console.log(`Normal Weight: ${BMI.toFixed(2)}`)
    }   else if(BMI>25 && BMI<=30){
        console.log(`Over Weight: ${BMI.toFixed(2)}`)
    }   else if(BMI>30){
        console.log(`Obesity: ${BMI.toFixed(2)}`)
    }   else {
        console.log(`Please type approriate value`)
   }   
}
/*Note: in English System: console.log(English System,kg,cm)
in Metric System: console.log('Metric System',pounds,inches)*/
    
//BMI_calculator(UNIT,WEIGHT,HEIGHT)
    
   
BMi_calculator('English System',165.347,64); //28.3
BMi_calculator('Metric System',75,165);    //27.5



//--------------------------------------------------------
/*
UNIT TESTING
READ ME: I did a lot of INTERGRATION TEST for my CODE but I GUESs it needs more
package to include in JEST so I decided to get piece of code/line to test, 
then now this is it:
*/
//Test

checkComparison = (BMI) =>{
    if(BMI<=18.5){
        console.log(`Under Weight: ${BMI.toFixed(2)}`)
    }   else if(BMI>18.5 && BMI<=25){
        console.log(`Normal Weight: ${BMI.toFixed(2)}`)
    }   else if(BMI>25 && BMI<=30){
        console.log(`Over Weight: ${BMI.toFixed(2)}`)
    }   else if(BMI>30){
        console.log(`Obesity: ${BMI.toFixed(2)}`)
    }   else {
        console.log(`Please type approriate value`)
   }   
   return BMI
},
calculatorCheck = (Unit,weight,height) =>{
     if(Unit=='English System'){
      return BMI = (weight/height/height)*703
   }
},

calculatorCheck2 = (Unit,weight,height) =>{
    if(Unit=='Metric System'){ 
       return BMI = (weight/height/height)*10000
  }
},

module.exports = checkComparison;