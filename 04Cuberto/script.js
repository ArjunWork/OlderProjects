Shery.mouseFollower();
Shery.makeMagnet(".magnet,.tag,.cont a,.cont i");
Shery.hoverWithMediaCircle(".hvr",{
    videos:["0.mp4",'2.mp4','3.mp4']
});

gsap.to(".fLeftElem",{
    scrollTrigger:{
        trigger: "#fImages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power4,
});

let sections =document.querySelectorAll(".fLeftElem");

Shery.imageEffect(".images", {
    style: 1,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,idx){
            ScrollTrigger.create({
                trigger:section,
                start:"top 20%",
                end:"bottom 80%",
                scrub:5,
                // markers:"true",
                onUpdate: function(prog){
                    setScroll(prog.progress+idx)
                }
            })
        })
    },
  });


  Shery.imageEffect("#slide img", {
    config:{
        onMouse:{value:1}
    },
    style: 1,
})