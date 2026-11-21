// 1. Control del menú responsivo
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// 2. Contador simple de carrito
let count = 0;
function agregarCarrito() {
    count++;
    document.getElementById('cart-count').textContent = count;
}

// 3. Modal de información detallada del videojuego
const modal = document.getElementById('infoModal');

function abrirInfo(titulo, descripcion, requisitos) {
    document.getElementById('modalTitle').textContent = titulo;
    document.getElementById('modalDesc').textContent = descripcion;
    document.getElementById('modalSpecs').textContent = requisitos;
    modal.style.display = 'flex';
}

function cerrarInfo() {
    modal.style.display = 'none';
}

// Cerrar modal si se hace clic fuera de la caja
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarInfo();
    }
});