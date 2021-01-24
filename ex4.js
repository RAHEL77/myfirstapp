(function(){ 
    'use strict';
    let restaurants = [
        {restName :"resA", maxNumOfClients :100, ifKosher: 'y', ifLemehadrin:'n'
        ,kindsOfFood:['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'just drink11']},
                {restName :"resB",maxNumOfClients :130, ifKosher: 'y', ifLemehadrin:'y'
        ,kindsOfFood:['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'just drink11']},
        {restName :"resC",maxNumOfClients :10, ifKosher: 'n', ifLemehadrin:'n'
        ,kindsOfFood:['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'just drink11']
    }]; 
let readlineSync = require('readline-sync');
let item;
let ifLemehadrinUser;
let designNumClients = /^[0-9]{1,3}$/;
let maxNumOfClientsUser = readlineSync.question('how many people are you going with? you can order maximum 999 place : '); 
let tempNum  = Number(maxNumOfClientsUser);
    try{
        if (!designNumClients.test(tempNum))
            throw new Error("enter just number please");            
        }
    catch (error){
        console.log( "******enter only number");
        process.exit(1);
    }    
let designKosher = /^[y|n]{1}$/;
let ifKosherUser = readlineSync.question('Should it be Kosher? (y/n) : ');
try{
    if (!designKosher.test(ifKosherUser))
        throw new Error("enter just character");            
    }
catch (error){
    console.log( "******enter only y or n");
    process.exit(1);
}
if ((ifKosherUser ==='y') || (ifKosherUser ==='Y'))
{
    let designLehmadrin = /^[y|n]{1}$/;
    ifLemehadrinUser = readlineSync.question('Should it be Kashrut Lemahadrin? (y/n) : ');
    try{
        if (!designLehmadrin.test(ifLemehadrinUser))
            throw new Error("enter just character");            
        }
    catch (error){
        console.log( "******enter only y or n");
        process.exit(1);
    }
}
let kindOfFoodUser= ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'just drink11'];
let index = readlineSync.keyInSelect(kindOfFoodUser, '----What kind of food do you want?');
try{
    if (index===-1)
    throw new Error("enter a number please");            
    }
catch (error){
    console.log( " Run the program again and enter numbers between 1-5 for kindof food");
    process.exit(1);
}
// console.log('You ordered , ' + kindOfFoodUser[index] );
            restaurants.map(function(item)
            {
                //if there is enough place for clients
                if (Number(maxNumOfClientsUser) <= item.maxNumOfClients)
                {   
                    if ((ifKosherUser === 'y') || (ifKosherUser ==='Y'))
                        {
                           if ((ifLemehadrinUser === 'y') || (ifLemehadrinUser === 'Y'))
                           {
                               // lehamadrin and the restaurants has the kind of food for user
                            if (((item.ifKosher === ifKosherUser) ||(item.ifKosher.toUpperCase === ifKosherUser)) && 
                            ((ifLemehadrinUser === item.ifLemehadrin) || (ifLemehadrinUser === item.ifLemehadrin.toUpperCase)))
                                 console.log("for Lehamdrin" + kindOfFoodUser[index] 
                                 +"  the best restaurants for you :  " + item.restName);
                            else 
                                // lehamadrin and the restaurants has no the kind of food for user
                                 console.log("There is no "
                                 + kindOfFoodUser[index]+ " for mehadrin  at " + item.restName);
                            }  
                            else
                            {
                               // if the user choosed kosher without lehmadrin,
                               // and the restaurant has the kindof food
                               if ((item.ifKosher === ifKosherUser)||(item.ifKosher.toUpperCase === ifKosherUser))
                                   console.log("for kosher" + kindOfFoodUser[index] 
                                   +"  the best restaurants for you :  " + item.restName);
                               // if the user choosed kosher without lehmadrin,
                               // and the restaurant has no the kindof food
                               else 
                                  console.log("There is no any "
                                  + kindOfFoodUser[index]+ " kosher food in all restaurants")
                            }
                        }
                    else
                    //if the user didnt choose kosher
                         console.log("For "+kindOfFoodUser[index] + " the best restaurants for you :  " 
                         + item.restName);
                }
                else
                //if (Number(maxNumOfClientsUser) > item.maxNumOfClients)
                    console.log("There is no enough place at restaurant "+item.restName +
                    "  You can order maximum  " + item.maxNumOfClients );
            });
})();