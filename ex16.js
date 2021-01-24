(function(){ 
    'use strict';
    let readlineSync = require('readline-sync');
    let arr1 = readlineSync.question('Enter numbers : ');
    let arr1Int= Number(arr1);

    //const arrayOfDigits = numToSeparate.toString().split("");
    let arrayOfDigits = Array.from(String(arr1Int), Number);
    reverseArray(arrayOfDigits)
    console.log(arrayOfDigits)

    function reverseArray(arrayOfDgts){

    return arrayOfDgts.reverse()
    }
})();