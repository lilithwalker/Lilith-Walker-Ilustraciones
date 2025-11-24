// Filtros de galería
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;

    items.forEach(item => {
      const match = cat === 'all' || item.dataset.cat === cat;
      item.style.display = match ? '' : 'none';
    });
  });
});

// Modal de imagen
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCap = document.getElementById('modal-cap');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalCap.textContent = img.closest('figure').querySelector('figcaption').textContent;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
});

// Cerrar modal con fondo o ESC
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});
