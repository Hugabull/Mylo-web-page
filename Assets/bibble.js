const bibbles = document.querySelectorAll(".bibble");

bibbles.forEach(img => {
    img.addEventListener("mouseenter", () => {
      const maxX = window.innerWidth - img.offsetWidth;
      const maxY = window.innerHeight - img.offsetHeight;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  bibbles.forEach(img => {
  const x = Math.random() * (window.innerWidth - img.offsetWidth);
  const y = Math.random() * (window.innerHeight - img.offsetHeight);
  img.style.transform = `translate(${x}px, ${y}px)`;
});