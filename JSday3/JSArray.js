
//a) create the two arrays:
let boys = ["Peter" , "Lars" , "Ole"];
let girls = ["Janne" , "Hanne" , "Sanne"];

//console.log(boys);

//b) merge arrays
let all = [...boys , ...girls];

//console.log(all);

//c) use join() method
let allComma = all.join(",");
//console.log(allComma);

let allHyphen = all.join("-");
//console.log(allHyphen);

//d) add names Lone and Gitte to the end of the array
girls = [...girls , "Lone" , "Gitte"];
//console.log(girls);

//e) add names Hans and Kurt to the start of the array
boys = ["Hans" , "Kurt" , ...boys];
//console.log(boys);

//f) remove the first name in the array (Hans)
boys.shift()
//console.log(boys);

//g) remove the last name from the array (Gitte)
girls.pop();
//console.log(girls);

//h) remove Ole and Janne from the middle of the array
all = [...boys , ...girls];
all.splice(3,2);
//console.log(all);

//i) reverse the all array
all.reverse();
//console.log(all);

//j) sort the all array
all.sort();
console.log(all);

//k) Write a sort method that handles both capitalized and non-capitalized names
all = [...boys , ...girls];

all.sort(function(a,b){
    return a.toLowerCase().localeCompare(b.toLowerCase() );
});
console.log(all);

//l) convert all names in the array to uppercase
let allU = all.map(function(name){
    return name.toUpperCase();
});
console.log(allU);

//m) create a new array with all the names that start with l or L
let allL = all.filter(function(name){
    return name.toLowerCase().charAt(0) == "l";
})
console.log(allL);
