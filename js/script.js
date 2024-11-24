// Ambil elemen tombol Love dan tombol Portofolio
const loveButton = document.getElementById('btn-love');
const portfolioButton = document.getElementById('btn-portfolio');

// Fungsi untuk menampilkan tombol Love setelah animasi mengetik selesai
window.addEventListener('load', () => {
    const typingText = document.querySelector('.typing-text');
    
    // Menunggu durasi animasi ketik selesai (3 detik + sedikit tambahan waktu untuk transisi)
    setTimeout(() => {
        loveButton.style.display = 'inline-block';
    }, 3500); // 3.5 detik agar tombol muncul setelah animasi selesai
});

// Tambahkan event listener pada tombol Love untuk menampilkan tombol Portofolio
loveButton.addEventListener('click', () => {
    // Sembunyikan tombol Love setelah diklik
    loveButton.style.display = 'none';

    // Tampilkan tombol Portofolio
    portfolioButton.style.display = 'inline-block';
});
