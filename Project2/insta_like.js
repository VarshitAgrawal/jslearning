var con = document.querySelector("#container");
 icon = document.querySelector("i");
//  flag =0
con.addEventListener("dblclick", function(){

    icon.style.transform ='translate(-50%, -50%) scale(1)'
    setTimeout(function(){
        icon.style.transform ='translate(-50%, -50%) scale(0)'
    },3000)
   })      

