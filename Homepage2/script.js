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

     const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    const backToTopBtn = document.getElementById("backToTop");

   window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };

     backToTopBtn.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

 