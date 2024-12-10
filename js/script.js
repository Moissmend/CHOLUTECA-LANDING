
const bar = document.querySelector('.bar');
const menu = document.querySelector('.navbar ul');

// Añadir evento de clic al botón de barra
bar.addEventListener('click', () => {
  menu.classList.toggle('active'); 
});
