
(function(){ 
    'use strict';
    let readlineSync = require('readline-sync');
    let designbet = /^[0-9]{1,}$/;

    console.log( "|--------------------------------------------------|")
    console.log( "|************* Hi, Here is OUR game ***************|")
    console.log( "|--------------------------------------------------|")
    let str = readlineSync.question('   *Please choose a Name to play: ');
    let bet;
    let playagain ='y';
    let betInt;
    let flag = false;
    let randuser=0;
    let randcomp=0;
    let count = 50;
    console.log( "      Hi, " + str +"!!, WELCOME to our game, YOU HAVE ** " + count + " ILS **");
     checkNum(count);
    
    function checkNum(count){
    do
    {
        bet=0; betInt=0;
        bet = readlineSync.question(" Place your bet for the next round 1-"+ count +" ** only pozitif numbers ** :");
        betInt = Number(bet);
    }
    while((!designbet.test(betInt)) || (betInt===0)) ;
        if (betInt>count) 
            console.log("Nuu Beemet!!, you have only "+count+ " ILS, Bye");
        else 
            callrandoms();}

    function callrandoms(){
    randuser = Math.floor(Math.random() * 12) + 1  
    randcomp = Math.floor(Math.random() * 12) + 1  
    console.log("my card  number is, "+ randcomp+", and your card number is, "+randuser);

    if (randcomp<randuser){
            count= betInt+count;
            console.log(" you WIN !!  = you have  "+ count+ " ILS");
            playagain = readlineSync.question(' do you want to play again (y/n): ');
            if ((playagain=='y') ||(playagain=='Y'))
                checkNum(count)
            else 
            if ((playagain=='n') ||(playagain=='N')) 
                console.log("bye ");
            else
                {
                playagain = readlineSync.question(' choose (y/n): ');
                if ((playagain=="y") ||(playagain=="Y"))
                    checkNum(count);
                }
            }
        else 
        if  (randcomp>randuser){
            count= count-betInt;
            if (count===0)
            {
                console.log( "you lost 50 and you have  : "+ count +" ILS");
                console.log( "you are broke : Bye bye"+ count +" ILS");
            }
            else
            {
                 console.log( "you lost, and you have  : "+ count +" ILS")
                 playagain = readlineSync.question(' do you want to play again (y/n): ');
                 if ((playagain=='y') ||(playagain=='Y'))
                     checkNum(count);
                 else 
                 if ((playagain=='n') ||(playagain=='N')) 
                    console.log("bye ");
                 else
                 {
                     playagain = readlineSync.question(' choose (y/n): ');
                     if ((playagain=="y") ||(playagain=="Y"))
                         checkNum(count);
                 }
            }}
        else
        if  (randcomp===randuser){
            console.log("teko")
            checkNum(count);
        }   
    }
   })();