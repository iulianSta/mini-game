// Mini game functionality
// Horizontal stand point
let hStandPoint = 0;
// Vertical stand point
let vStandPoint = 0;
// Go Up function
function goUp() {
  vStandPoint -= 5;
  emoji.style.top = vStandPoint + "px";
  emoji.style.transform = "rotate(-110deg)";
}
// Go Down function
function goDown() {
  vStandPoint += 5;
  emoji.style.top = vStandPoint + "px";
  emoji.style.transform = "rotate(70deg)";
}
// Go Right function
function goRight() {
  hStandPoint += 5;
  emoji.style.left = hStandPoint + "px";
  emoji.style.transform = "rotate(-20deg)";
}
// Go Left function
function goLeft() {
  hStandPoint -= 5;
  emoji.style.left = hStandPoint + "px";
  emoji.style.transform = "rotate(-190deg)";
}
// Move function
function move(e) {
  if (e.code == "KeyW") goUp();
  if (e.code == "KeyD") goRight();
  if (e.code == "KeyA") goLeft();
  if (e.code == "KeyS") goDown();
  if (
    window.innerHeight / 2 <= vStandPoint &&
    window.innerWidth - 120 <= hStandPoint
  )
    document.querySelector("body").textContent = "YOU WON!";
}

const emoji = document.querySelector(".emoji");
const body = document.querySelector("body");
body.addEventListener("keypress", move);
