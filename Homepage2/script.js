const slides = document.querySelectorAll(".hero-slide");
let currentIndex = 0;

setInterval(() => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}, 5000);

const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const totalCards = cards.length;
let index1 = 0;

function slideTestimonials() {
  index1++;
  if (index1 > totalCards - 3) {  
    index1 = 0;
  }
  track.style.transform = `translateX(-${index1 * (100 / 3)}%)`;
}

setInterval(slideTestimonials, 3000);  

document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".menu-items").classList.toggle("show");
});
 document.querySelector(".btn-close").addEventListener("click", function () {
    document.querySelector(".menu-items").classList.remove("show");
    });

 