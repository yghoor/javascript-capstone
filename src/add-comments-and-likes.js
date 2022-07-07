export function addHeartToggleListeners() {
  document.querySelectorAll('.heart-empty-icon').forEach((heartIcon) => {
    heartIcon.addEventListener('click', () => {
      heartIcon.classList.toggle('d-none');
      heartIcon.nextElementSibling.classList.toggle('d-none');
    });
  });
}

