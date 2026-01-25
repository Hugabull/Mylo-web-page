const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundId = button.dataset.sound;
    const audio = document.getElementById(soundId);

    audio.currentTime = 0; // restart sound
    audio.play();
  });
});
