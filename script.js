/*
  Maison Matcha Website JavaScript

  Includes:
  1. Mobile menu
  2. FAQ accordion
  3. Automatic copyright year
*/

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-menu a");
const faqItems = document.querySelectorAll(".faq-item");
const year = document.getElementById("year");

/* Mobile Menu */
mobileMenuBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");

  mobileMenuBtn.classList.toggle("active");
  mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

/* Close mobile menu when clicking a link */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  });
});

/* FAQ Accordion */
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

/* Automatic Footer Year */
year.textContent = new Date().getFullYear();