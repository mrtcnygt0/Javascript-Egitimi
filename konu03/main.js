/* 
Koşullu İfadeler
- Koşullu ifadeler birden fazla değerin birbirine göre durumunu kontrol ederek yapılacak işlemleri gösteren kod bloğudur.
syntax
if(koşul)
{
    koşul gerçekleştiyse yani true ise yapılacak işlemler buraya yazılır
}
else if {koşul}
{
    yukarıdaki koşul gerçekleşmeyip bu koşul gerçekleştiyse yapılacak işlemler buraya yazılır
}
else 
{
    tüm if blokları içindeki koşullar gerçekleşmediğinde yapılacak işlemler buraya yazılır.
}      

*/

// ornek1
let sayi = prompt("Yaşınızı giriniz...");
console.log(typeof sayi);

if (sayi >= 18) {
  alert(`${sayi} yaşındasınız. Ehliyet alabilirsiniz.`);
} else {
  alert(`Büyü de gel kardeşim`);
}

// ornek2
let kadi = prompt("Kullanıcı adını giriniz...");
let sifre = Number(prompt("6 haneli sayısal şifrenizi giriniz..."));

if (kadi == "mert" && sifre === 123456) {
  alert(`Hoş Geldin ${kadi}!`);
} else if (kadi == "gamze" && sifre === 135790) {
  alert(`Hoş Geldin ${kadi}!`);
} else {
  alert("Yanlış Bilgiler Girdiniz.");
}

// ornek3
let bakiye = 1000;
let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz..."));

// bakiye eksi değer mi kontrolü
if (cekilecekTutar < 0) {
  alert("Yanlış tutar girdiniz");
}
// bakiye 0 mı kontrolü
else if (cekilecekTutar == 0) {
  alert(`Deminden şimdiye geldiniz. Bakiyeniz ${bakiye}`);
}
// bakiye sayı mı kontrolü
else if (typeof cekilecekTutar !== "number" || isNaN(cekilecekTutar)) {
  alert("Lütfen sayı giriniz.");
}
// bakiye yeterli mi kontrolü
else if (cekilecekTutar <= bakiye) {
  bakiye -= cekilecekTutar;
  alert(`İşlem başarılı. Kalan bakiyeniz: ${bakiye}`);
}
// bakiye yetersiz ise
else {
  alert("Yetersiz bakiye.");
}

// ornek4
let sayi1 = prompt("Bir sayı giriniz...");
let sayi2 = prompt("Bir sayı daha giriniz...");
alert("Toplam: " + (sayi1 + sayi2));

if (sayi1 % 2 == 0) {
  alert("Sayı çifttir.");
} else {
  alert("Sayı tektir.");
}

//2.yol
let sonuc = sayi1 % 2 === 0 ? "Çift" : "Tek";

// ornek6
const akts = 240;
const gano = 2.85;
const zorunluDersKaldiMi = false;
const stajTamamladiMi = true;

if (akts >= 240) {
  console.log("Mezuniyet için AKTS yeterli. Diğer kontroller yapılıyor...");
  if (!zorunluDersKaldiMi) {
    //Mantıksal değil kullanımı
    if (stajTamamladiMi) {
      if (gano >= 2) {
        console.log(
          "Mezuniyet için tüm şartlar sağlanmıştır. Mezuniyet işlemleri başlatılıyor...",
        );
      } else {
        console.log(
          "Not ortalamanız mezuniyet için yeterli değildir. Mezuniyet işlemleri başlatılamaz.",
        );
      }
    } else {
      console.log(
        "Stajınızı tamamlamadınız. Mezuniyet işlemleri başlatılamaz.",
      );
    }
  } else {
    console.log(
      "Zorunlu derslerden kaldınız. Mezuniyet işlemleri başlatılamaz.",
    );
  }
} else {
  console.log(
    "Mezuniyet için AKTS yeterli değildir. Mezuniyet işlemleri başlatılamaz.",
  );
}

// ornek7 VKİ HESAPLAMA = VKİ = Kilo (kg) ÷ [Boy (m)]²
let kilo = Number(prompt("Kilonuzu giriniz (kg)..."));
let boy = Number(prompt("Boyunuzu giriniz (cm)..."));

if (boy <= 0 || kilo <= 0) {
  console.log("Boy ve kilo değerleri 0'dan büyük olmalıdır.");
} else if (isNaN(boy) || isNaN(kilo)) {
  console.log("Geçerli sayılar giriniz.");
} else {
  if (boy > 3) {
    var vki = kilo / ((boy / 100) * (boy / 100));
  } else {
    var vki = kilo / (boy * boy);
  }
  if (vki < 18.5) {
    console.log("Zayıf");
  } else if (vki < 25) {
    console.log("Normal");
  } else if (vki < 30) {
    console.log("Fazla Kilolu");
  } else {
    console.log("Obez");
  }
  console.log(`Vücut Kitle İndeksiniz: ${vki}`);
}
