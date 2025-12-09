// SCROLL ANIMATION
var HiddenElements = document.querySelectorAll(".hide");

// Trigger the animation for the elements that can be seen after dom loading
window.addEventListener("DOMContentLoaded", ()=>{
    var trigger = window.innerHeight;
        console.log(trigger)
    HiddenElements.forEach(element => {
        const top = element.getBoundingClientRect().top - 100;
        
        if(top < trigger){
            element.classList.add("show");
        }
    });
});

//Trigger the scroll animation
window.addEventListener("scroll",()=>{
    var trigger = window.innerHeight;
    console.log("Window = " + trigger);

    HiddenElements.forEach(element => {
        const top = element.getBoundingClientRect().top - 100;
        console.log("element = " + top);
        if(top < trigger){
            element.classList.add("show");
        }

    });
});
