let skeleton = document.querySelectorAll("[data-target]");

let video = document.querySelectorAll(".video video")
let title = document.querySelectorAll(".title h1")
let detail = document.querySelectorAll(".detail p")
let socialLinks = document.querySelectorAll(".social-links a i")


window.addEventListener("load",() => {
   
    setTimeout(() => {
        
         // for removing skeleton class
    skeleton.forEach((element) => {
        element.classList.remove("skeleton");
    })
    // for adding visibility class
    video.forEach(element => {
        element.play();
        element.style.visibility = "visible";
    });
    title.forEach(element => {
        element.style.visibility = "visible";
    });
    detail.forEach(element => {
        element.style.visibility = "visible";
    });
    socialLinks.forEach(element => {
        element.style.visibility = "visible";
    });

    }, 2500);

})