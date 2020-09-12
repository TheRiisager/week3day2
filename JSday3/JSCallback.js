//1)
let names = ["Hubert", "Bo", "Morten", "Lisa", "Mette", "Kristian", "Anne", "Ida", "Jon"]
let namesFiltered = names.filter(function(name){
   return name.length <= 3;
});

function printEach(name, index){
   console.log(name + " found at index " + index) 
}

//console.log("/////// unfiltered names /////////");
//names.forEach(printEach);
//console.log("/////// filtered names /////////");
//namesFiltered.forEach(printEach);

//2)
function arrayUpperCase(name){
    return name.toUpperCase();
}

let namesUpperCase = names.map(arrayUpperCase);
//console.log(namesUpperCase);

//3)
function listify(array){
    let listedArray = array.map(function(item){
        return "<li>" + item + "</li>";
    });
    return "<ul>" + listedArray.join("") + "</ul>";
}

//console.log( listify(names) );

//4)
let protocar = { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 };
let cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 4799 }
];

let yearFilter = function(item){
    //instead of hardcoding you could probably fetch the year value from a HTML element or something to make it dynamic
    return item.year > 1999;
}

let makeFilter = function(item){
    return item.make === 'Volvo';
}

let priceFilter = function(item){
    return item.price < 5000;
}

//array to filter first, afterwards add as many filter functions as necessary
let masterFilter = function(array, filter1, filter2, filter3){
    let filteredArray = array;
    for(i = 1; i<arguments.length; i++){
        filteredArray = filteredArray.filter(arguments[i]);
    }
    
    return filteredArray;
}

let carsF = masterFilter(cars, yearFilter, makeFilter, priceFilter);
console.log(carsF);

//4a)
let sqlify = function(item){
    return "(" + Object.values(item).join(",") + ")";
}

console.log(cars);

console.log( "INSERT INTO cars" + "(" + Object.keys(cars[0]).join(",") + ")" + " VALUES " + cars.map(sqlify).join(",") + ";" );

//