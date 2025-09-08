let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Musik
let audio;
function playMusic() {
  if (!audio) {
    audio = new Audio('music/love-song.mp3');
  }
  audio.play();
}

// tampilkan foto pertama saat load
window.onload = () => {
  showSlide(currentSlide);
};
