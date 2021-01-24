(function(){ 
    'use strict';

    var figlet = require('figlet');
    var answerChar;
    console.log(figlet.textSync(`HANGEDMAN Game !`, { font: 'Doom', width: 100 }));
    let oneCharDesign=/^[a-z]*$/i;
    
    let checkAnswer
    var nostars =true;
    let attempt =10;
    var flagTrueAnswer=false;
    var randomWords = require('random-words');  
    let readlineSync = require('readline-sync');
    var word;
 
    ranWord();

    function ranWord(){
        //keep the word to compare
        word= randomWords()
        console.log(word);
        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
        answerArray[i] = "*";
        var star1=answerArray.toString().split(",").join("")
        }    
            console.log(star1)
           
            do{
            var ch1= readlineSync.question('Please choose a letter : ');
            var ch=ch1.toLowerCase()
            if (!oneCharDesign.test(ch))
                console.log("no symbols and no numbers !")
            else{    
             if (ch.length===1)  {
              if (word.includes(ch)){
                for (var i = 0; i < word.length; i++) {
                    if (word[i]===ch){
                        flagTrueAnswer=true;
                        answerArray[i]=ch
                        answerChar=answerArray.toString().split(",").join("")

                  }
                }  
                }
                else
                attempt=attempt-1;
                console.log("you have "+attempt+ " guesses")
                if (flagTrueAnswer)
                  console.log("the word is :   "+answerChar)
                  checkAnswer=answerArray.toString().split(",").join("")
                }
                else 
                  console.log("!!! Enter Only one letter")
                }  }     
                  while ((attempt!==0)&&(checkAnswer!=word))
                  if (attempt===0)
                    console.log(" You dont have more Attemp")
                  else
                  if (checkAnswer==word)  
                    console.log(" You are good !")

    }

})();