(function(){ 
    'use strict';
    
    Prime();
    function Prime()
	{
    let readlineSync = require('readline-sync');
    let num = readlineSync.question('Enter a number and we will print all prime numbers up to this nmber: ');
    let numInt = Number(num);
    let counter = 0;
    for(let i=2; i<=numInt; i++)
    {
        var controlpr = true;
        for (let j=2; j<i ;j++)                   
	    {
			if(i%j==0)
			controlpr = false;
        }
        if (controlpr )
        if (i===numInt){
            process.stdout.write(i+" "); }
        else
            process.stdout.write(i+",");
    }
    }
})();