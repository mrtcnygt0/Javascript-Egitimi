/* 
Döngüler
Belirli bir işlemin tekrarlanması durumunda kullanılan yapılardır
for(başlangıç değeri; bitiş; işlemin yönü)
{
    tekrarlanması istenen işlemler yazılır
}
*/
/*
for (var i = 1; i <= 10; i++) {
  document.writeln(i);
}

//i++
//++i --> Değişkenin ilk değeri ekrana yazdırılmaz
//i--
//--i : Değişkenin ilk değeri ekrana yazdırılmaz

for (var i = 1; i <= 5; i++) {
  document.writeln(`<br>${i}. Öğrenci`);
}

// öğrenciler dizisi oluştur
let Ogrenciler = ["Ali", "Ayşe", "Ahmet", "Fatma", "Mehmet"];
for (var i = 0; i < Ogrenciler.length; i++) {
  document.writeln(`<br>${i + 1}. Öğrenci: ${Ogrenciler[i]}`);
}
*/

let Kurslar = ["JavaScript", "Python", "C#", "Java", "PHP"];
for (var i = 0; i < Kurslar.length; i++) {
  document.writeln(`<div class="box">${Kurslar[i]}</div>`);
}

var toplam = 0;
for (var i = 1; i <= 10; i++) {
  toplam += i;
}
console.log("Toplam: " + toplam);

for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (var i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 sayısı kullanılmadı");
    continue;
  }
  if (i == 8) {
    console.log("Döngü durduruldu.");
    break;
  }
}

// Dik üçgen piramidi
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("* ");
  }
  document.write("<br>");
}

//2.yöntem
for (var i = 1; i <= 5; i++) {
  document.write("* ".repeat(i));
  document.write("<br>");
}

//Kullanıcıdan sayı girişi alalım ve girilen sayı asal mı kontrol edelim
var sayi = prompt("Sayı giriniz...");
var asalMi = true;
if (sayi <= 1) {
  asalMi = false;
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      asalMi = false;
      break;
    }
  }
}
if (asalMi) {
  alert(`Sayı asaldır: ${sayi}`);
} else {
  alert(`Sayı asal değildir: ${sayi}`);
}

//while
while (true) {
  document.write("sonsuz döngü başladı.");
  break;
}
