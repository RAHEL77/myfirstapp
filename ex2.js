(function(){ 
    'use strict';
let readlineSync = require('readline-sync');

let num1 = readlineSync.question('Enter the first num : ');
let num2 = readlineSync.question('Enter the second num : ');
makesTen(num1,num2);
function makesTen(num1,num2){
    let num =Number(num1)+Number(num2);
    if (num===10)
        console.log('Makes 10');
    else
        console.log('Nope!');
}
})();