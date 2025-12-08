// Selecciona todas las imágenes dentro del contenedor
const imagenes = document.querySelectorAll('.nomina-imagenes img');

let imagenActiva = null; 

imagenes.forEach(img => {
  img.addEventListener('click', () => {
 
    if (imagenActiva && imagenActiva !== img) {
      imagenActiva.style.transform = "scale(1)";
    }

    if (img.style.transform === "scale(2)") {
      img.style.transform = "scale(1)";
      imagenActiva = null;
    } else {
      img.style.transform = "scale(2)";
      img.style.transition = "transform 0.3s";
      imagenActiva = img;
    }
  });
});

// Carrucel INVENTARIO
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carrusel .slide');
  const prevBtn = document.querySelector('.carrusel .prev');
  const nextBtn = document.querySelector('.carrusel .next');
  let indice = 0;

  function mostrarSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('activo', i === n);
    });
  }

  prevBtn.addEventListener('click', () => {
    indice = (indice === 0) ? slides.length - 1 : indice - 1;
    mostrarSlide(indice);
  });

  nextBtn.addEventListener('click', () => {
    indice = (indice === slides.length - 1) ? 0 : indice + 1;
    mostrarSlide(indice);
  });

  mostrarSlide(indice);
});

