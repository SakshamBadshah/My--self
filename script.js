// Show welcome message in browser console
console.log("Welcome to Saksham Portfolio Website");

// Smooth scroll effect
document.querySelectorAll('a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        if(this.getAttribute('href').startsWith('#')){

            e.preventDefault();

            const target =
            document.querySelector(this.getAttribute('href'));

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Typing Animation
const text = "Frontend & Full Stack Developer";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.querySelector(".home-text h3").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);
    }
}

// Clear old text first
document.querySelector(".home-text h3").innerHTML = "";

typeEffect();
// Mouse Move Background Effect

document.addEventListener("mousemove", function(e){

    const images = document.querySelectorAll(".bg-image");

    images.forEach((img, index) => {

        let speed = (index + 1) * 0.01;

        let x = (window.innerWidth - e.pageX * speed) / 100;
        let y = (window.innerHeight - e.pageY * speed) / 100;

        img.style.transform =
        `translate(${x}px, ${y}px)`;
    });
});