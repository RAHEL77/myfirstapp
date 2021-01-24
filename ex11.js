(function(){ 
    'use strict';
    let readlineSync = require('readline-sync');
    let str = readlineSync.question('Please enter a string : ');
    str=str.toLowerCase();
    palindrome(str);
    function palindrome(str) {
        const reversed = str
      str=str.split('').reverse().join('');
        if( str === reversed)
        console.log("Yes "+ str +"  is Palindrome")
        else 
        console.log("No "+ str +"  is not Palindrome")
    }
})();