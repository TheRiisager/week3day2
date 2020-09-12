window.onload = function(){
    
    document.getElementById("outer").addEventListener("click", divClickerB)
    
    /** code from a)
    divList = document.getElementsByTagName("DIV")
    for(let i = 0; i<divList.length; i++){
        divList[i].addEventListener( "click", function(){ divClickerA(divList[i]) } );
    }
     */
};

//code from a)
let divClickerA = function(item){
    console.log("Hello from " + item.id);
}

let divClickerB = function(event){
    //console.log("hello from " + event.target.id)
    document.getElementById("textout").innerHTML = "Hello from " + event.target.id;
}

