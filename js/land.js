"use strict";

const mybullet = document.querySelectorAll(".bullets .bull");
const myCarousel = document.querySelector("#carouselExampleControls"); // تأكد إن الـ ID ده صح

console.log(mybullet);

// عند الضغط على bullet
mybullet.forEach((bull, index) => {
  bull.addEventListener("click", () => {
    mybullet.forEach(b => b.classList.remove("active"));
    bull.classList.add("active");

    // تحريك السلايدر حسب ترتيب الـ bullet
    const carousel = bootstrap.Carousel.getInstance(myCarousel);
    if (carousel) {
      carousel.to(index);
    }
  });
});

// لما السلايد يتغير أوتوماتيك أو يدوي
myCarousel.addEventListener("slid.bs.carousel", () => {
  const activeIndex = [...myCarousel.querySelectorAll('.carousel-item')].findIndex(item =>
    item.classList.contains('active')
  );

  mybullet.forEach((bull, index) => {
    bull.classList.toggle("active", index === activeIndex);
  });
});
