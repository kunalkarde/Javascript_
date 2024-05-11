const accountId = 2318140
let accountEmail="kunalkarde4@gmail.com"
var accountPassword="Kunal123"
accountCity = "Gondia"

/*
Use var when you need a variable with function or global scope.
Use let when you need a variable with block-level scope and its value might change.
Use const when you need a variable with block-level scope and its value won't change after initialization.

*/


// var

function Example(){
    var x=10;
    if(true){
        var y=20;

    }
    console.log(x);
    console.log(y);
}
 Example();

