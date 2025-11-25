window.addEventListener("load", () => {
  const img = document.getElementById("myImage");
  img.classList.add("show");
});

window.addEventListener("load", () => {
  const img = document.getElementById("text1");
  img.classList.add("show2");
});

window.addEventListener("load", () => {
  const img = document.getElementById("text2");
  img.classList.add("show3");
});

window.addEventListener("load", () => {
  const img = document.getElementById("text3");
  img.classList.add("show4");
});

window.addEventListener("load", () => {
  const img = document.getElementById("text4");
  img.classList.add("show5");
});

window.addEventListener("load", () => {
  const img = document.getElementById("text5");
  img.classList.add("show6");
});

window.addEventListener("load", () => {
  const img = document.getElementById("text6");
  img.classList.add("show7");
});

const img = document.getElementById("myImage2");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      img.classList.add("show8");
      observer.disconnect();
    }
  });
});

observer.observe(img);


