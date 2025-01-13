// Pilih elemen yang akan di-zoom
const zoomElement = document.querySelector('.zoom-element');

// Fungsi untuk memeriksa posisi scroll
function handleScroll() {
  const elementPosition = zoomElement.getBoundingClientRect().top; // Posisi elemen relatif ke viewport
  const windowHeight = window.innerHeight;

  // Jika elemen terlihat di viewport, tambahkan class 'visible'
  if (elementPosition < windowHeight) {
    zoomElement.classList.add('visible');
  } else {
    zoomElement.classList.remove('visible');
  }
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);
