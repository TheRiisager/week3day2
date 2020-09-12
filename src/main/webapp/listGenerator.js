let names = ["Hubert", "Bo", "Morten", "Lisa", "Mette", "Kristian", "Anne", "Ida", "Jon"];

let generateList = function(array){
    let list = names.map(function(item){
        return "<li>" + item + "</li>";
    });
    return list;
};

let injectList = function(list){
    document.getElementById("listContainer").innerHTML = "<ul>" + list.join("") + "</ul>";
};

let addName = function(){
    let name = document.getElementById("name").value;
    names.push(name);
};

let updateList = function(event){
    event.preventDefault();
    addName();
    injectList( generateList(names) );
};

window.onload = function(){ 
    injectList( generateList(names) );
    document.getElementById("form").addEventListener("submit", updateList);
};
