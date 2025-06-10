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

 let slideAtual = 0;
    const slides = document.querySelectorAll('.slide');

    function mostrarSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }

    function mudarSlide(direcao) {
      slideAtual += direcao;
      if (slideAtual < 0) slideAtual = slides.length - 1;
      if (slideAtual >= slides.length) slideAtual = 0;
      mostrarSlide(slideAtual);
    }