let h5 = document.querySelector("h5");
let add = document.querySelector("#add");
// let remove = document.querySelector("#remove");
let check = 0;

add.addEventListener("click",()=>{
    if(check == 1){
        check = 0;
        add.innerText = "Remove Friend";
        h5.innerText = "Friends";
        h5.style.color = "Green";
    }
    else{
        check = 1;
        add.innerText = "Add Friend";
        h5.innerText = "Stranger";
        h5.style.color = "Red";
    }

})

// remove.addEventListener("click",()=>{
//     remove.innerText = "Removed";
//     h5.innerText = "Stranger";
//     add.innerText = "Add Friend";
//     h5.style.color = "Red";
// })
