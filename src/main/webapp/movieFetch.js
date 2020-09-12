let urlTemplate = "https://riisager.digital/week3day2/api/movie/title/";

let getMovies = function(event){
    event.preventDefault();
    
    let url = urlTemplate + document.getElementById("text").value;
    
    let result = fetch(url)
        .then(res => res.json()) //in flow1, just do it
        .then(data => {
         // Inside this callback, and only here, the response data is available
         console.log("data",data);
         let prepData = data.map(function(item){
             return "Title: "  + item.title + "<br>" +
                     "Year: "  + item.year + "<br>" +
                     "Actors: "+ item.actors.join(", ")
         })
         document.getElementById("container").innerHTML =  prepData.join("<br><br>");
        })    
};

window.onload = function(){
    document.getElementById("searchForm").addEventListener("submit", getMovies);
};




