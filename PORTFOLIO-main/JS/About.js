
// Profile Image Change animation
document.getElementById('darkenedImage').addEventListener('click', function() {
    const darkenedImage = document.getElementById('darkenedImage');
    const originalImage = document.getElementById('originalImage');
    darkenedImage.style.opacity = '0';
    
    
    setTimeout(function() {
        darkenedImage.style.display = 'none';
        originalImage.classList.remove('hidden');
        originalImage.style.opacity = '1'; // Ensure the original image is fully visible
    }, 200); // Match the transition duration
});



// SCROLL ANIMATION
var HiddenElements = document.querySelectorAll(".hide");

// Trigger the animation for the elements that can be seen after dom loading
window.addEventListener("DOMContentLoaded", ()=>{
    var trigger = window.innerHeight;
    
    HiddenElements.forEach(element => {
        const top = element.getBoundingClientRect().top - 100;
        console.log("element = " + top);
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
