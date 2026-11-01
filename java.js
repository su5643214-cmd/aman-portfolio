
// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
  navLinks.classList.toggle("open");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("open");
  });
});

// Scroll Animations

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(function(element) {
  observer.observe(element);
});

console.log("AMAN EDITOR Website Loaded!");
