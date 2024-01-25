window.addEventListener("mousemove",function(details){
    //max screen width  and height
    let maxWidth = screen.availWidth;
    let maxHeight = screen.availHeight;
    
    //min width and height to enter in map
    let minWidth = maxWidth-300;
    let minHeight = maxHeight -250;
 
    //applying gsap in rect and mouse
    gsap.to('#rect',{
        left: gsap.utils.mapRange(0,maxWidth,300,minWidth,details.clientX)+ "px",
        top: gsap.utils.mapRange(0,maxHeight,250,minHeight,details.clientY)+ "px",
        ease: Power4
    });
})