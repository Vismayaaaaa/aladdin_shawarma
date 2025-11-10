const menuIcon = document.getElementById("menu-icon");
const navContainer = document.querySelector(".nav-container");


const leftLinks = document.querySelector(".nav-links.left").innerHTML;
const rightLinks = document.querySelector(".nav-links.right").innerHTML;

const mobileMenu = document.createElement("div");
mobileMenu.classList.add("mobile-menu");
mobileMenu.innerHTML = leftLinks + rightLinks;
navContainer.appendChild(mobileMenu);


menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuIcon.classList.toggle("active");

  const icon = menuIcon.querySelector("i");
  if (menuIcon.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});


mobileMenu.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    
    if (targetId !== "#") {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("active");

    const icon = menuIcon.querySelector("i");
    icon.classList.replace("fa-xmark", "fa-bars");
  });
});




const fadeSections = document.querySelectorAll(".fade-in-section, .fade-in-element");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

fadeSections.forEach((section) => observer.observe(section));





const infoStrip = document.querySelector(".info-strip-content");
let lastScrollY = window.scrollY;
let offset = 0;

window.addEventListener("scroll", () => {
  if (!infoStrip) return; 
  const currentScrollY = window.scrollY;
  const delta = currentScrollY - lastScrollY;
  offset -= delta * 0.5;
  infoStrip.style.transform = `translateX(${offset}px)`;
  lastScrollY = currentScrollY;
});




const glow = document.querySelector(".floating-glow");
if (glow) {
  glow.addEventListener("animationend", () => {
    glow.classList.add("float-loop");
  });
}
