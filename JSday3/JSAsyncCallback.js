//1)
/*
 *  i expect the outputs to print in the following order:
 *  1: aaaaaaaaaa
 *  2: dddddddddd
 *  3: ffffffffff
 *  4:eeeeeeeeee
 *  5:bbbbbbbbbb
 *
 */

//2)
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");



