document.addEventListener("DOMContentLoaded", () => {
  // Slider elemanları sayfa yüklendikten sonra seçilir; böylece HTML hazır olmadan kod çalışmaz.
  const slider = document.querySelector(".about-slider");
  const slides = Array.from(document.querySelectorAll(".about-slide"));
  const dots = Array.from(document.querySelectorAll(".slider-dot"));
  const previousButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");

  // Slider bulunamazsa kod sessizce durur; diğer sayfa içerikleri etkilenmez.
  if (!slider || slides.length === 0) {
    return;
  }

  let currentSlide = 0;
  let automaticSlider;

  function showSlide(index) {
    // Önce aktif görsel ve nokta temizlenir.
    slides[currentSlide].classList.remove("active");

    if (dots[currentSlide]) {
      dots[currentSlide].classList.remove("active");
    }

    currentSlide = (index + slides.length) % slides.length;

    // Yeni görsel ve ona ait nokta aktif hale getirilir.
    slides[currentSlide].classList.add("active");

    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutomaticSlider() {
    // Tekrarlanan sayaç oluşmaması için önce mevcut otomatik geçiş temizlenir.
    clearInterval(automaticSlider);
    automaticSlider = setInterval(nextSlide, 4500);
  }

  // Kullanıcı manuel geçiş yaptığında otomatik süre yeniden başlar.
  nextButton?.addEventListener("click", () => {
    nextSlide();
    startAutomaticSlider();
  });

  previousButton?.addEventListener("click", () => {
    previousSlide();
    startAutomaticSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startAutomaticSlider();
    });
  });

  // Fare slider üzerindeyken görsel sabit kalır; ayrılınca otomatik geçiş devam eder.
  slider.addEventListener("mouseenter", () => {
    clearInterval(automaticSlider);
  });

  slider.addEventListener("mouseleave", startAutomaticSlider);

  startAutomaticSlider();
});
