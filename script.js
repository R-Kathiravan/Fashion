 
document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".menu-items").classList.toggle("show");
});
 document.querySelector(".btn-close").addEventListener("click", function () {
    document.querySelector(".menu-items").classList.remove("show");
    });


 let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(n) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === n);
    dots[i].classList.toggle("active", i === n);
  });
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showTestimonial(index);
  });
});

 setInterval(nextTestimonial, 4000);

 showTestimonial(index);
     const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });


   function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      htmlElement.classList.add('dark-mode');
    } else {
      htmlElement.classList.remove('dark-mode');
    }
  }

   applyTheme();

   themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');
    
     if (htmlElement.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });