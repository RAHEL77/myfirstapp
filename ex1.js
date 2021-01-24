
var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('What is your name? ');
console.log('Hello ' + userName + '!');