document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen yang dibutuhkan
    const menuIcon = document.getElementById('menu-icon');
    const menuWrapper = document.getElementById('menu-wrapper');
    const connectSection = document.querySelector('.connect');
    const myImage = document.getElementById('my-image');
    const myName = document.getElementById('my-name');
  
    // Tambahkan elemen teks "Let's Connect"
    const letsConnectText = document.createElement('span');
    letsConnectText.textContent = "Let's Connect";
  
    // Tambahkan event listener untuk mengatasi klik pada ikon menu
    menuIcon.addEventListener('click', () => {
      // Toggle kelas 'active' pada menu-wrapper
      menuWrapper.classList.toggle('active');
  
      // Toggle kelas 'active' pada bagian "Let's Connect"
      connectSection.classList.toggle('active');
  
      // Toggle kelas 'active' pada foto dan nama
      myImage.classList.toggle('active');
      myName.classList.toggle('active');
  
      // Jika menu aktif, tampilkan "Let's Connect" dan letakkan di sebelah elemen .connect
      if (menuWrapper.classList.contains('active')) {
        connectSection.style.display = 'block';
        connectSection.style.top = (menuWrapper.offsetHeight + menuWrapper.offsetTop) + 'px';
        connectSection.style.left = '80px'; // Set posisi dari kiri ke 10px
        connectSection.style.width = '70%'; // Set lebar ke 95%
        
        // Tambahkan teks "Let's Connect" ke dalam .connect
        connectSection.appendChild(letsConnectText);
      } else {
        // Jika menu tidak aktif, sembunyikan "Let's Connect" dan hapus teks
        connectSection.style.display = 'none';
        connectSection.removeChild(letsConnectText);
      }
      
      // ...Tambahkan logika lain yang diperlukan di sini
    });
  
    // Tambahkan event listener untuk mengatasi klik pada ikon "ke atas"
    const scrollToTop = document.getElementById('scroll-to-top');
    scrollToTop.addEventListener('click', () => {
      // Gulir halaman kembali ke atas
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efek gulir halus
      });
    });
  
    // Tambahkan event listener untuk menampilkan atau menyembunyikan ikon "ke atas" saat menggulir halaman
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        // Tampilkan ikon "ke atas" ketika pengguna telah menggulir lebih dari 100 piksel
        scrollToTop.style.display = 'block';
      } else {
        // Sembunyikan ikon "ke atas" jika pengguna menggulir ke atas
        scrollToTop.style.display = 'none';
      }
    });
  });
  