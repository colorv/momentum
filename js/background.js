const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bg = document.createElement("div");
bg.id = "bg";
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;
bg.appendChild(bgImage);
document.body.appendChild(bg);
