(function(){ 
    'use strict';
  
    let str ;
    for (let i=0; i<=100; i++){
        if (i===0)
            process.stdout.write(i+",");
        str=i.toString();
        if ((i%7===0) || (str.includes(7)))
            process.stdout.write("boom,");
        else
        if (i===100){
            process.stdout.write(i+" "); }
        else
        process.stdout.write(i+",");
    }
})();