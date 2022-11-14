// Meal Cost and Total Tips
// Tips  10% of the meal
// Total Tips is = meaalCost * 0.1

function totalMealCost(mealCost){
    let totalTips = (mealCost * 0.1);
    return totalTips;
}


console.log(totalMealCost(500)) // 50 TotalTips
console.log(totalMealCost(1000)) // 100 Total Tips
console.log(totalMealCost(10000)) // 1000 Total Tips