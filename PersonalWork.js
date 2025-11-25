const overlay = document.getElementById("zoom-overlay");
const images = document.querySelectorAll(".zoom-img:not(.no-zoom)");

images.forEach(img => {
  img.addEventListener("click", () => {
    if (img.classList.contains("zoomed")) {
      img.classList.remove("zoomed");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      img.classList.add("zoomed");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

// klik op achtergrond om uit te zoomen
overlay.addEventListener("click", () => {
  document.querySelectorAll(".zoomed").forEach(img => img.classList.remove("zoomed"));
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});


