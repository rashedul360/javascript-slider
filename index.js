let images = ["images/01.jpg", "images/02.jpg", "images/03.jpg"];
let imageFind = document.querySelector("img");
let count = 0;
function next() {
  count++;
  if (count >= images.length) {
    count = 0;
    imageFind.src = images[count];
  } else {
    imageFind.src = images[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = images.length - 1;
    imageFind.src = images[count];
  } else {
    imageFind.src = images[count];
  }
}
