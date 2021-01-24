(function(){ 

'use strict';

let arr1 = ["parsnip","potato", "apple"]
let arr2 = ["celery", "beetroot"]

returnNewArray(arr1,arr2)
console.log(arr1)  

function returnNewArray(arr1,arr2){
return Array.prototype.push.apply(arr1, arr2)
}
})();