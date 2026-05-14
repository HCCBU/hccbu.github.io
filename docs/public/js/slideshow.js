
  let slideIndex = 1;
  let slideTimer;

  function currentSlide(n) {
    clearTimeout(slideTimer);
    showSlide(slideIndex = n);
    startAutoSlide();
  }

  function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
      return;
    }

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    if (dots.length >= slideIndex) {
      dots[slideIndex - 1].classList.add("active");
    }
  }

  function startAutoSlide() {
    if (document.getElementsByClassName("slide").length <= 1) {
      return;
    }

    slideTimer = setTimeout(function() {
      slideIndex++;
      showSlide(slideIndex);
      startAutoSlide();
    }, 4000);
  }

  showSlide(slideIndex);
  startAutoSlide();

