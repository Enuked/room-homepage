const mobileImages = [
  '../../public/assets/images/mobile-image-hero-1.jpg',
  '../../public/assets/images/mobile-image-hero-2.jpg',
  '../../public/assets/images/mobile-image-hero-3.jpg'
];
const desktopImages = [
  '../../public/assets/images/desktop-image-hero-1.jpg',
  '../../public/assets/images/desktop-image-hero-2.jpg',
  '../../public/assets/images/desktop-image-hero-3.jpg'
];

const imgElement = document.querySelector('.library');
const mobile = document.querySelectorAll('.mobile1, .mobile2, .mobile3');
const desktop = document.querySelectorAll('.desktop1, .desktop2, .desktop3');

let currentIndex = 0;

function showImage(index) {
  imgElement.src = window.innerWidth <= 768 ? mobileImages[index] : desktopImages[index];
  mobile.forEach((text, idx) => {
      if (idx === index) {
          text.style.display = 'block';
      } else {
          text.style.display = 'none';
      }
  });
  desktop.forEach((text, idx) => {
      if (idx === index) {
          text.style.display = 'block';
      } else {
          text.style.display = 'none';
      }
  });
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % mobileImages.length;
  showImage(currentIndex);
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + mobileImages.length) % mobileImages.length;
  showImage(currentIndex);
}

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

showImage(currentIndex);

window.addEventListener('resize', () => {
  showImage(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
  const hamburg = document.querySelector('.hamburg');
  const nav = document.querySelector('.container');
  const blur = document.getElementById('blur'); // Select the element with id="blur"

  hamburg.addEventListener('click', function() {
    nav.classList.toggle('active');
  });

  // Add event listener to remove active class when clicking on the element with id="blur"
  blur.addEventListener('click', function() {
    nav.classList.remove('active');
  });
});