(function(){ 
    'use strict';
       
let readlineSync = require('readline-sync');
let num = readlineSync.question('Enter a number between 0-9 : ');

switch ((num)){
                                              
    case '0':
        console.log('Zero');
        break;
    case '1':
        console.log('One');
        break;
    case '2':
        console.log('Two');
        break;
    case '3':
        console.log('Three');
        break;
    case '4':
        console.log('Four');
        break;
    case '5':
        console.log('five');
        break;
    case '6':
        console.log('Six');
        break;
    case '7':
        console.log('Seven');
        break;
    case '8':
        console.log('eight');
        break;
    case '9':
        console.log('Nine');
        break;  
    default:
        console.log('Please run the program again ...and enter a number between 0-9');
}
})();