let cursor = document.querySelector(".cursor");


window.addEventListener("mousemove",(details)=>{
        cursor.style.left = details.clientX -10 +'px';
        cursor.style.top = details.clientY -10+ 'px';
    }
)




