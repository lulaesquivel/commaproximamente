const blob = document.getElementById('cursor-blob');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    // Actualizamos la posición del blob usando transform.
    // Restamos la mitad del tamaño del blob (40px / 2 = 20px) para centrarlo en el puntero.
    blob.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
});

// --- Script para el menú hamburguesa ---
const menuBtn = document.querySelector('.menu-hamburguesa');
const navLinks = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('menu-abierto');
    menuBtn.classList.toggle('activo'); // <-- Esta es la línea nueva
});