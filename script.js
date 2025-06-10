function revelarMensagem() {
  const msg = document.getElementById("mensagemSecreta");
  msg.style.display = "block";
}
function revelarMensagem() {
  const msg = document.getElementById("mensagemSecreta");
  const foto = document.getElementById("fotoSurpresa");

  msg.style.display = "block";
  foto.style.display = "block";
}

 let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function mudarSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    if (slideIndex >= totalSlides) slideIndex = 0;
    mostrarSlide(slideIndex);
  }

  // Passa slide automaticamente a cada 5 segundos
  setInterval(() => {
    mudarSlide(1);
  }, 5000);

  mostrarSlide(slideIndex);