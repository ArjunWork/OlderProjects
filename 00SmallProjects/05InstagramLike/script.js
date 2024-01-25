let like = document.querySelector("#like");
let heart = document.querySelector("#heartInside");
let check = 0;


like.addEventListener("click",()=>{
    if(check == 0){
        check = 1;
        like.style.color = "red";
        heart.style.transform =  'translate(-50%,-50%) scale(2)';
        heart.style.opacity =  0.8;
        setTimeout(function(){
            heart.style.opacity =  0;
        },500);
    }
    else{
        check = 0;
        heart.style.opacity =  0;
        like.style.color = "white";
    }
})



let con = document.querySelector("#container");
con.addEventListener("dblclick",()=>{
        check = 1;
        like.style.color = "red";
        heart.style.transform =  'translate(-50%,-50%) scale(2)';
        heart.style.opacity =  0.8;
        setTimeout(function(){
            heart.style.opacity =  0;
        },500);
    
});


