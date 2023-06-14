// code your solution here
function saturdayFun(activity ) {
   if (activity === undefined) {
    activity = 'roller-skate';

    return `This Saturday, I want to ${activity}!`;
}}
console.log(saturdayFun());
 
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun('bathe my dog'));


function mondayWork(activity) {
    if (activity === undefined) {
        activity = 'go to the office';
        return `This Monday, I will ${activity}.`;
    };
}
console.log(mondayWork());

function mondayWork(activity = 'go to the office' ) {
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork('work from home'));

function wrapAdjective(flair = "*") {
   return function (adjective) {
   return`You are ${flair}${adjective}${flair}!`;
   }
}
const highlightWithAsterisk =wrapAdjective('*');
console.log(highlightWithAsterisk('a hard worker'));

const highlightWithDoublePie =wrapAdjective('||');
console.log(highlightWithDoublePie('a dedicated programmer'));
