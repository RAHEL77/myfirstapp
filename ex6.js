(function(){ 
    'use strict';
    let readlineSync = require('readline-sync');
    let numInt;
    let ifNum = true;
    let num;
    do
    {
         num = readlineSync.question('Please choose a number larger than 10 : ');
        numInt = Number(num);
    }
    while ((numInt<=10) || (numInt!=num));
    console.log("thank you");
})();