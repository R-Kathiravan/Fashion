const slides = document.querySelectorAll(".hero-slide");
let currentIndex = 0;

// Hero slides
setInterval(() => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}, 5000);

 const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const totalCards = cards.length;
let index1 = 0;
let testimonialInterval; 

function slideTestimonials() {
  index1++;
  if (index1 > totalCards - 3) {
    index1 = 0;
  }
  track.style.transform = `translateX(-${index1 * (100 / 3)}%)`;
}

 function handleTestimonials() {
  if (window.innerWidth > 478) {
    if (!testimonialInterval) {
      testimonialInterval = setInterval(slideTestimonials, 3000);
    }
  } else {
    clearInterval(testimonialInterval);
    testimonialInterval = null;
    track.style.transform = "translateX(0)";  
  }
}

 handleTestimonials();

 window.addEventListener("resize", handleTestimonials);

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-items");
const closeBtn = document.querySelector(".btn-close");

 hamburger.addEventListener("click", function (e) {
  e.stopPropagation();  
  menu.classList.toggle("show");
});

 closeBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.remove("show");
});

 document.addEventListener("click", function (e) {
  if (menu.classList.contains("show") && 
      !menu.contains(e.target) && 
      !hamburger.contains(e.target)) {
    menu.classList.remove("show");
  }
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

 