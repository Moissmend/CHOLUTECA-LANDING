
// Seleccionar los elementos
const bar = document.querySelector('.bar');
const menu = document.querySelector('.sidebar ul');

// Añadir evento de clic al botón de barra
bar.addEventListener('click', () => {
  menu.classList.toggle('active'); // Alternar la clase 'active'
});
