
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

 