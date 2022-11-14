// Calculation 1: Georgia's weight is 75 kg and her height is 165 cm what is Gerggia's BMI?
/*
const Patient ={
    Name: 'Georgia', 
    Gender: 'Female', 
    AGe: 32,
    BMI_reference:{
        Unit:{
            EnglishSystem:[
            {
                Weight:{
                    'kg': 75
                },
                height:{
                    'cm': 165
                }
            }
        ],
            MetricSystem:[
            {
                Weight:{
                    'lbs': 165.347
                },
                height:{
                    'inch': 64
                }
            }
        ]
    }
}
}
*/
/*

USE EnglishSystem or MetricSystem
foot 1 = 30.48 cm
foot 1 = inch 12
inch 1 =  cm 2.54

Weight
kg 1 = lbs 2.20463


*/
function BMi_calculator(Unit,weight,height){
    if(Unit=='Metric System'){
        BMI = (weight/height/height)*10000;
  } 
    else if (Unit=='English System'){
        BMI = (weight*2.20463/height*2.54/height*2.54)*703
  };
        if(BMI<=18.5){
            console.log(`Under Weight: ${BMI}`)
    }   else if(BMI>18.5 && BMI<=25){
            console.log(`Normal Weight: ${BMI}`)
    }   else if(BMI>25 && BMI<=30){
            console.log(`Over Weight: ${BMI}`)
    }   else if(BMI>30){
            console.log(`Obesity: ${BMI}`)
    }   else {
        console.log(`Please type approriate value`)
    }
};
BMi_calculator('English System',75,165);
    
