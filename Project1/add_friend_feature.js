// document.getElementById("add")
currentStatus = document.querySelector("h5")
add = document.querySelector("#add")
// var remove = document.querySelector("#remove")
 check = 0;
add.addEventListener("click", function(){
    if (check == 0) {
         currentStatus.innerHTML = "Friends"
        currentStatus.style.color = 'green'
        add.innerHTML='Remove Friend'
        check = 1;
    }
    else { 
        currentStatus.innerHTML = "Stranger"
        currentStatus.style.color = "red"
        add.innerHTML='Add Friend'
        check = 0;
    }
   
})
// remove.addEventListener("click", function(){
//     currentStatus.innerHTML = "Stranger"
//     currentStatus.style.color = "red"
// })

