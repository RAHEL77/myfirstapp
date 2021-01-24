(function(){ 
    'use strict';
    let readlineSync = require('readline-sync');
    let sentence = readlineSync.question('Enter a string : ');
    
    var output = vowels(sentence);
    console.log("Result is :"+ output);

    function vowels(x){
     var a = x.split('');
     for( var i=0 ; i<a.length ; i++){
        if(a[i]=="a"){
            a[i] = a[i].toUpperCase();
        }
        else if(a[i]=="e"){
            a[i] = a[i].toUpperCase();
        }
        else if(a[i]=="i"){
            a[i] = a[i].toUpperCase();
        }
        else if(a[i]=="o"){
            a[i] = a[i].toUpperCase();
        }
        else if(a[i]=="u"){
            a[i] = a[i].toUpperCase();
        }
       }
      var b = a.join('');
      return b;
     }
})();