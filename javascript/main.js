console.log("main.js loaded ✅"); // testing 

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".heart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const icon = btn.querySelector("i");
      if (!icon) return;

      // Toggle solid/regular
      const isRegular = icon.classList.contains("fa-regular");

      icon.classList.toggle("fa-regular", !isRegular);
      icon.classList.toggle("fa-solid", isRegular);

      // Color (optional)
      icon.style.color = isRegular ? "red" : "";
    });
  });
});
