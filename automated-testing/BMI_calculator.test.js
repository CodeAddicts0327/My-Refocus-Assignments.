/*test(`check if is true`,()=>{
    let testStatus ="it's working"
    expect(testStatus).toBe("it's working")
})*/
//-----------------------------------------------------


const checkComparison = require("./BMI_calculator")
test('If statement this comparison works',()=>{
        expect(checkComparison(28.38))
            .toBe(28.38)
})

test('If the BMI_calcultor for English System works',()=>{
    const text = calculatorCheck('English System',165.347,64)
    expect(text).toBe(28.378647705078127)
})

test('If the BMI_calcultor for Metric System works',()=>{
    const text = calculatorCheck2('Metric System',75,165);
    expect(text).toBe(27.548209366391184)
})
