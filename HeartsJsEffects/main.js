document.addEventListener("mousemove", heartsOnMouseMove);

function heartsOnMouseMove(e) {
  const heart = document.createElement("span");

  let x = e.offsetX;
  let y = e.offsetY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  let size = Math.random() * 30;
  heart.style.width = 10 + size + "px";
  heart.style.height = 10 + size + "px";

  let transformValue = Math.random() * 360;
  heart.style.transform =
    "rotate(" + transformValue + "deg)";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
}
