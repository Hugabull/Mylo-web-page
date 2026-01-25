  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const nav = document.querySelector(".nav");
  const toggleOpen = document.querySelector(".nav-toggle-open");

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
    toggleOpen.classList.toggle("open");
  });

  toggleOpen.addEventListener("click", () => {
    links.classList.toggle("open");
    nav.classList.toggle("open");
    toggle.classList.toggle("open");
    toggleOpen.classList.toggle("open");
  });