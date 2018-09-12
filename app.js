const bodyBg = document.querySelector("body");

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const bg = "background-color:rgb(" + r + ", " + g + ", " + b + ");";
    console.log("background color:" + bg);
    bodyBg.style = bg;
}
setInterval(randomColor, 3000);
window.onload = function () {
    randomColor();
}