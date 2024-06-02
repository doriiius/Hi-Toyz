const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.transform = "translateX(0)";
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.transform = "translateX(-200%)";
}
setInterval(nextSlide, 3000);
