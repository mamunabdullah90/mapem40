// for auto text typing
var Typed = new Typed(".auto-text", {
    strings: ["Omnipotent\"", "All-Hearing\"", "Omniscient\""],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

// for image sliding
const slideshowElements = document.querySelectorAll(".slideshow-element");
console.log(slideshowElements);
let countElements = 1;

setInterval(() => {
    countElements++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if (countElements > slideshowElements.length) {
        slideshowElements[0].classList.add("current");
        countElements = 1;
    } else {
        currentElement.nextElementSibling.classList.add("current");
    }
}, 5000);