// you are now working on a finace app that helps users save money. To encourage users to continue saving,
// you are adding a feature to show how much money the have already saved.

// Suppose that Sam wants to save ₱10,000 and has already saved ₱7500.
// Use console.log and variables to output the following in JavaScript:
// "Thank you for your discipline and hardwork, Sam! You are now 25% away from your goal of saving ₱10,000."

let targetSaving = 10000;
let samSavedMoney = 7500;

let samNeedMoreSave = targetSaving - samSavedMoney;
let totalPercentMoreSave = samNeedMoreSave / targetSaving *100 + "%";


console.log(`Thank you for your discipline and harwork, Sam You are now ${totalPercentMoreSave} away from your goal of saving ₱${targetSaving}`);


//NOTE: Hi Refocus, Please help me what is wrong with this my assignments. I tried many times.
