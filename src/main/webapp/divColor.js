function setDivColor(){
    let divList = document.getElementsByTagName("DIV");
    
    for(let i = 0; i<divList.length; i++){
        divList[i].style.backgroundColor = getColorCode();
    }
};


function getColorCode() {
      var makeColorCode = '0123456789ABCDEF';
      var code = '#';
      for (var count = 0; count < 6; count++) {
         code =code+ makeColorCode[Math.floor(Math.random() * 16)];
      }
      return code;
};

window.onload = setDivColor;
   



