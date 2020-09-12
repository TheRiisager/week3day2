//1,2,3)
//Function Declaration
function add(n1, n2){
   return n1 +n2;
};

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
};

//Callback example
var cb = function(n1,n2, callback){
    try {
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch(e) {
        console.log("Something went wrong in function cb");
    }
  
};

console.log( add(1,2) )     // Prints 3
console.log( add )          // Prints a reference to the add function
console.log( add(1,2,3) ) ; // Prints 3, the third variable is accessible, but ignored
console.log( add(1) );      // Prints NaN, because Undefined is not a number, and cannot be added to
console.log( cb(3,3,add) ); // Prints "Result from the two numbers: 3 + 3 = 6"
console.log( cb(4,3,sub) ); // Prints "Result from the two numbers: 4 + 3 = 1"
console.log(cb(3,3,add())); // Throws "TypeError: callback is not a function", because add() passes the return value of the function, rather than a reference to the add function
console.log(cb(3,"hh",add));// Prints "Result from the two numbers: 3 + hh = 3hh", because type coercion converts 3 to a string

//4)
function mul(n1, n2){
    return n1*n2;
};
console.log( cb(4, 4, mul) );

//5)
console.log( cb(4, 4, function(n1, n2){
    return n1/n2;
}) );



