const heroTexts = [
    { title: "Men's Collection", desc: "Style that defines you." },
    { title: "Women's Collection", desc: "Elegance for every occasion." },
    { title: "Kids' Collection", desc: "Fashion for the little ones." }
  ];

  let index = 0;
  const overlay = document.getElementById("heroText");

  setInterval(() => {
    index = (index + 1) % heroTexts.length;
    overlay.querySelector("h1").textContent = heroTexts[index].title;
    overlay.querySelector("p").textContent = heroTexts[index].desc;
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

 