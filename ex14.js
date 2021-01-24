(function(){ 
    'use strict';
    let readlineSync = require('readline-sync');
    let designint = /^[0-9]{1,}$/;
    let num, numInt;
    do
    {
        num = readlineSync.question('Please choose a number : ');
        numInt = Number(num);
    }
    while((!designint.test(numInt)) || (numInt===0)) ;

    let intArray = new Array(numInt);
    for (let i=0; i<intArray.length; i++)
        intArray[i] =( Math.floor(Math.random() * 50) + 1 ) ;
        console.log(intArray);
        console.log(Math.min(...intArray)+", is min");
        console.log(Math.max(...intArray)+ ", is max");

    })();