(function(){ 
    'use strict';
    let designnum = /^-?\d*(.\d+)?$/;
    let readlineSync = require('readline-sync');
    let numx;
    do{
    numx = readlineSync.question('Please choose a number to get its factorial: ');
    var numInt = Number(numx);
    }
    while (!designnum.test(numInt));
    var ycalc= xFact(numInt);
    console.log( "The factorial of "+ numInt +" is, " + ycalc);
    function xFact(num)
    {
        var xcalc = 1;
        if (num<-1) 
        {
            for (let j = -2; j>= num; j--)
                xcalc = xcalc * j;
            return xcalc*-1;
        }
             
        else if ((num == 0 ) ||(num==1) || (num==-1))
           return num;
        else if (num>0)
        {
            for (let i = 2; i<= num; i++)
            xcalc = xcalc * i;
            return xcalc;
        }
    }
})();