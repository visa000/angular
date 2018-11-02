/*
IIFE gets invoked immediately,
What ever functions defined in iife is local to that iife function alone
*/
var module = (function (msg){
    console.log(msg);

    function first() {
        console.log('i am in first');
    }

    function second() {
        console.log('i am in second');
    }

    return {
        one : first,
        two : second
    }
        
})('I am inside iife');

var result = module.one;
console.log(result);
console.log(module.two);