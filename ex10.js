(function(){ 
    'use strict';
    let readlineSync = require('readline-sync');
    let str = readlineSync.question('Please enter a string : ');
    let astr=str.replace(/ /g,'*');
    console.log(astr);
})();