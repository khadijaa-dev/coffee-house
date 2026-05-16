// BUTTON ALERT

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

  alert("Bienvenue dans notre café ☕");

});


// CONTACT FORM

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message envoyé avec succès ✅");

});


// SCROLL EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background = "#000";

  }else{

    navbar.style.background = "#1c1c1c";

  }

});

const elements = document.querySelectorAll(".card, .about, .gallery img");

window.addEventListener("scroll", () => {

  elements.forEach(el => {

    const position = el.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s";
    }

  });

});
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  loader.style.display = "none";

});
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

  link.addEventListener("click", () => {

    document.querySelector(".nav-links").classList.remove("active");

  });

});