import {
  carouselSlide,
  carouselImages,
  prevButton,
  nextButton,
  carouselDots,
  currentIndex,
  slideWidth,
  slideInterval,
  nextSlide,
  prevSlide,
  updateSlide,
  updateDots,
} from "./dom";

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

updateSlide();
