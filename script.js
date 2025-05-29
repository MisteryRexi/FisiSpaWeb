const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.remove("initial");
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    header.classList.add("initial");
  }
});



const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    // Quitar ampliación de las demás
    galleryImages.forEach((i) => {
      if (i !== img) i.classList.remove("enlarged");
    });
    // Alternar ampliación en la seleccionada
    img.classList.toggle("enlarged");
  });
});

// Redireccionar al hacer clic en el botón de tratamientos
document.addEventListener('DOMContentLoaded', function () {
    const botonTratamientos = document.querySelector('.boton-tratamientos');
    if (botonTratamientos) {
      botonTratamientos.addEventListener('click', function () {
        window.location.href = 'tratamientos.html';
      });
    }
  });
  
  // Función para copiar el correo al hacer clic en el botón
const btnCopiar = document.getElementById('btn-copiar');
if (btnCopiar) {
  btnCopiar.addEventListener('click', function() {
    const correo = document.getElementById('correo').innerText;
    navigator.clipboard.writeText(correo).then(() => {
      document.getElementById('copiado').style.display = 'inline';
      setTimeout(() => {
        document.getElementById('copiado').style.display = 'none';
      }, 2000); // La palomita desaparece después de 2 segundos
    });
  });
}

