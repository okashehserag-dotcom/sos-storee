

const images = [
  "images/soon.png",
  "images/soon.png",
  "images/soon.png"
];

let current = 0;
const slide = document.getElementById("slide");

function next() {
  current = (current + 1) % images.length;
  slide.src = images[current];
}

function prev() {
  current = (current - 1 + images.length) % images.length;
  slide.src = images[current];
}
