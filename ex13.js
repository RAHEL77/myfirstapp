(function(){ 
    'use strict';  
    let  designnum  =/\b([a-zA-Z]+)\b/
    let readlineSync = require('readline-sync');
    let num;
    num = readlineSync.question('Please enter some sentences: ');
    var ll= longestWord(num);
    console.log("The longest word is :" +ll);
    function longestWord(string){
    var str = string.split(" ");
        
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++)
    {
        if ((longest < str[i].length) && (designnum.test(str[i])))
        {
                longest = str[i].length;
                word = str[i];
        }
    
    }
    return word;
}
})();