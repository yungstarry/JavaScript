export const carouselSlide = document.querySelector(".carousel-slide");
export const carouselImages = document.querySelectorAll(".carousel-slide img");
export const prevButton = document.querySelector(".carousel-prev");
export const nextButton = document.querySelector(".carousel-next");
export const carouselDots = document.querySelectorAll(".carousel-dot");

export let currentIndex = 0;
export const slideWidth = carouselImages[0].clientWidth;
export const slideInterval = setInterval(nextSlide, 5000);

export function nextSlide() {
  if (currentIndex === carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlide();
}

export function prevSlide() {
  if (currentIndex === 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  updateSlide();
}

export function updateSlide() {
let lists = document.querySelectorAll(".item");
document.getElementById("slide").appendChild(lists[0]);
  updateDots();
}

export function updateDots() {
  carouselDots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
