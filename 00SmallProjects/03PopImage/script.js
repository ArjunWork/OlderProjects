const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};


document.querySelector("#center")
.addEventListener(
    "mousemove",
    throttleFunction((dets) => {
        
        //create an div
        let div = document.createElement("div");

        //add class in div (two ways)
        // div.setAttribute("class","imagediv") 
        div.classList.add("imagediv");

        //add pos where you want to add (center)
        div.style.left = dets.clientX+'px';
        div.style.top = dets.clientY+'px';
        
        //crete an image 
        let img = document.createElement("img");

        //add id in img (two ways)
        img.setAttribute("id","divimg");
        img.id = 'divimg';
        
        //add src attribute in img
        img.setAttribute("src","https://random.imagecdn.app/v1/image?width=200&height=200")
        
        //add image into div
        div.appendChild(img);
        
        //add child on screen
        document.body.appendChild(div);


        //apply trandorm y = 0% in gsap so that image can come up
        gsap.to(img,{
            y:'0',
            ease: Power3,
            duration:0.4
        })

        gsap.to(img,{
            y:'100%',
            delay:0.4,
            ease: Power2,
            duration:0.4
        })



        //to remove div after sometime you have to create settime out

        setTimeout(function(){
            div.remove();
        },1500)

  }, 400)
);

// div.id = "myDiv";
// // div.setAttribute('id','myDiv');
// let mouse = details.clientX;
// div.style.left = details.clientX;
// div.style.top = details.clientY;
// center.appendChild(div);
// console.log("hey");
