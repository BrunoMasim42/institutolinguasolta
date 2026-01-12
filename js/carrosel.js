const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

/* Autoplay */
setInterval(() => {
  index = (index + 1) % slides.length;
  updateCarousel();
}, 4000);

