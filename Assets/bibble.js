const img = document.getElementById("bibble");

  img.addEventListener("mouseenter", () => {
    const maxX = window.innerWidth - img.offsetWidth;
    const maxY = window.innerHeight - img.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });