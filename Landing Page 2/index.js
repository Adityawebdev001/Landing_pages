const slides = [
    {
      left: "https://images.pexels.com/photos/3075352/pexels-photo-3075352.jpeg",
      right: "https://images.pexels.com/photos/616838/pexels-photo-616838.jpeg",
      bottom: "https://images.pexels.com/photos/796620/pexels-photo-796620.jpeg"
    },
    {
      left: "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg",
      right: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
      bottom: "https://images.pexels.com/photos/34950/pexels-photo.jpg"
    },
    {
      left: "https://images.pexels.com/photos/2189835/pexels-photo-2189835.jpeg",
      right: "https://images.pexels.com/photos/2951928/pexels-photo-2951928.jpeg",
      bottom: "https://images.pexels.com/photos/208827/pexels-photo-208827.jpeg"
    }
  ];

  let current = 0;

  const leftImg = document.querySelector(".rightup-Left");
  const rightImg = document.querySelector(".rightup-Right");
  const bottomImg = document.querySelector(".right-lo");

  function updateSlider() {
    leftImg.style.backgroundImage = `url(${slides[current].left})`;
    rightImg.style.backgroundImage = `url(${slides[current].right})`;
    bottomImg.style.backgroundImage = `url(${slides[current].bottom})`;
  }

  document.querySelector(".nav-buttons a:first-child").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    updateSlider();
  });

  document.querySelector(".nav-buttons a:last-child").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    updateSlider();
  });

  // Initial render
  updateSlider();