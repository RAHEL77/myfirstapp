(function(){ 
    'use strict';
let readlineSync = require('readline-sync');
let point= 2;
let scr1=31;
console.log( "------------------ THE QUIZ - SHOWS HOW MUCH GRAM YOU LOSE A WEEK ----------------- ");

console.log( " 1) How many times you run a week ? ");
let sport = ['One', 'Two', 'Five', 'None'];
let index1 = readlineSync.keyInSelect(sport);
function checktrycatch(indx) {
    try{
        if (indx===-1)
        throw new Error();            
        }
    catch (error){
        console.log( " Run the program again and enter numbers between 1-4");
        process.exit(1);
    }    
}

checktrycatch(index1);

point += index1+3;
console.log(point);

console.log( " 2) How much carbonhidrate you eat a week ? ");
let carbon = ['350 gr', '700 gr', '1400 gr', 'None'];
let index2 = readlineSync.keyInSelect(carbon);

checktrycatch(index2);

point = index2*-1;

console.log( " 3) How much protein you eat a week ? ");
let protein = ['less than 500 gr', 'more than 500 gr', 'more than 1400 gr', 'None'];
let index3 = readlineSync.keyInSelect(protein);

checktrycatch(index3);

point = (index3*-2)+3;

console.log( " 4) How is your sleep  ? ");
let sleep = ['no problem', 'sometimes hard to sleep', 'very hard to sleep', 'I sleep twice a day :)'];
let index4 = readlineSync.keyInSelect(sleep);

checktrycatch(index4);

point = index4*2;

console.log( " 5) How you control your stress ? ");
let stress = ['I have tools to control it', 'Sometimes hard', 'Allway hard to control', 'I dont have'];
let index5 = readlineSync.keyInSelect(stress);

checktrycatch(index5);

point = index5/2;
let score = Number(point+scr1);
if (score <= 31)
    console.log("final score is:"+ score+ "  ===> try to eat less carbonhidrate");
else
if ( score === 31.5)
console.log("final score is:"+ score+ " ===> try to eat less carbonhidrate and run more ");
else
if (score > 31.5)
console.log("final score is:"+ score+ " ===> just run and dont eat carbonhidrate!");

})();