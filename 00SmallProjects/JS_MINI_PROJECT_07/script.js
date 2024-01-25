var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    
    val.addEventListener("mouseenter",function(dets){
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave",function(dets){
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.clientX+"px";
        // val.childNodes[3].style.top = dets.y+"px";
    })
});