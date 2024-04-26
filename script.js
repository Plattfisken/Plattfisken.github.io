const animateButton = document.getElementById("animateButton");

animateButton.addEventListener('click', ToggleAnimation);

function ToggleAnimation() {
  const image = document.getElementById("image");
  if(image.style.animationPlayState === "running") {
    image.style.animationPlayState = "paused";   
  }
  else if(image.style.animationPlayState === "paused" || image.style.animationPlayState === "") {
    image.style.animationPlayState = "running";
  }
}
