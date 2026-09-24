const urunler = [
  "Kablosuz Kulaklık",
  "Akıllı Saat",
  "Mekanik Klavye",
  "Kablosuz Fare",
  "Oyun Kolu",
  "Web Kamerası",
];

for (let i = 0; i < urunler.length; i++) {
  document.writeln(`
        <div class="urun-karti">
        <div class="urun-baslik">${urunler[i]}</div>
        <button class="sepete-ekle-btn">Sepete Ekle</button>
        </div>`);
}
