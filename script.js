var typed = new Typed(".input", {
  strings: [
    "Frontend Developer",
    "UI/UX Designer",
    "Backend Developer",
    "Quick Learner",
  ],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});

//sticky header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});
