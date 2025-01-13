// Event listener untuk scroll
window.onscroll = function() {
    updateProgressBar();
  };
  
  function updateProgressBar() {
    // Total tinggi dokumen
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
    // Posisi scroll saat ini
    const scrollTop = document.documentElement.scrollTop;
  
    // Hitung persentase scroll
    const progress = (scrollTop / scrollHeight) * 100;
  
    // Perbarui lebar progress bar
    document.querySelector('.progress-bar').style.width = progress + '%';
  }
  