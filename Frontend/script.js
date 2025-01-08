const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".C_card");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
}, 5000);

// Navigate left and right
leftBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 3000);
});

rightBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  }, 3000);
});

  document.addEventListener("DOMContentLoaded", () => {
    const heroHeading = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-images img");

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === heroHeading) {
            heroHeading.style.animation = "slideInLeft 1s ease-in-out forwards";
          }
          if (entry.target === heroImage) {
            heroImage.style.animation = "slideInRight 1s ease-in-out forwards";
          }
        }
      });
    }, observerOptions);

    observer.observe(heroHeading);
    observer.observe(heroImage);
  });

