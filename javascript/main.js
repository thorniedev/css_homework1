console.log("main.js loaded ✅"); // testing

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const icon = btn.querySelector("i");
      if (!icon) return;

      const isRegular = icon.classList.contains("fa-regular");

      icon.classList.toggle("fa-regular", !isRegular);
      icon.classList.toggle("fa-solid", isRegular);
      icon.style.color = isRegular ? "red" : "";
    });
  });

  //  NAV TOGGLE
  const navBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navBtn && navLinks) {
    navBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }
});
