/* 
Değişkenler:
    Değişkenler, değeri değiştirilebilir javascript nesneleridir. Değişkenler, bir programda veri saklamak ve bu verilere erişmek için kullanılır. JavaScript'te değişkenler üç ana şekilde tanımlanabilir: var, let ve const.
    1. var: var anahtar kelimesi ile tanımlanan değişkenler, fonksiyon kapsamına sahiptir ve aynı isimle birden fazla kez tanımlanabilir. Ancak, var kullanımı günümüzde önerilmemektedir.
    2. let: let anahtar kelimesi ile tanımlanan değişkenler, blok kapsamına sahiptir ve aynı isimle birden fazla kez tanımlanamaz. let, modern JavaScript'te değişken tanımlamak için önerilen yöntemdir.
    3. const: const anahtar kelimesi ile tanımlanan değişkenler, sabit değerler için kullanılır ve değeri değiştirilemez. const ile tanımlanan bir değişkenin değeri yalnızca bir kez atanabilir.
*/

var isim = "Mert";
document.writeln(isim);
var isim = "Selami";
document.writeln(isim);

let ad = "Murat";
console.log(ad);
// let ad = "Mert"; Hatalı satır-Tekrar tanımlanmasına izin vermez.

const pi = 3.14;
// const pi = 3.14; //Hatalı satır
// pi = 4; // Hatalı satır, const sonradan değiştirilemez.

let isim1 = "Ahmet";
let yas = 25;
let aktif = true;
let notlar = [80, 90, 100]; //array
let kisi = { ad: "ali", soyad: "Kaya" }; //Object

console.log(typeof isim1);
console.log(typeof yas);
console.log(typeof aktif);
console.log(typeof notlar);

let a = [1, 2, 3, 4, 5];
let b = a;
console.log(b[1]);
b.push(6);
console.log(a); // [1,2,3,4,5,6] gösterilir çünkü a ve b aynı referansı tutar

//Tür Dönüşümleri
let sayi = "10";
let toplam = Number(sayi) + 5;
console.log(toplam);
let toplam2 = parseInt(sayi) + 5;
console.log(toplam2);

let mesaj = "arı bilgi";
// let int = Number(mesaj); //Hata verir. Her string veri integer' a dönüştürülemez ama her int veri stringe dönüştürülebilir.
let sinif = 13;
let durum = true;
let aktifMi = Number(durum);
console.log(aktifMi);
let stringBool = String(durum);
console.log(stringBool);

let x; // tanımlandı ama değer verilmedi
let y = null; // bilinçli olarak boş
console.log(x);
console.log(y);

// Temel aritmetik operatörler
let c = 10;
let d = 3;
console.log(c + d); // iki sayısal değer için matematiksel işlem yapar
console.log(c - d);
console.log(c / d);
console.log(c * d);
console.log(c % d); // bölümünden kalanı gösterir
let e = "Merhaba";
console.log(e + c); // string değer ile kullanılan + operatörü birleştirme işlemi yapar
console.log(e - c); // NaN - Belirsiz değer çıkartır.

let sayi1 = 5; // 0101
let sayi2 = 3; // 0011
// AND & , OR ||
console.log(sayi1 & sayi2); // 1 çıktısını verir. Sadece sondaki 1 satırında ikisinde de true yani (1) olduğu için 0001' den 1 gösterir.
console.log(sayi1 | sayi2);

//Eşitlik ve Atama Operatörleri
let sayi3 = 10;
let sayi4 = "10";
console.log(sayi3 == sayi3); // true yazar
console.log(sayi3 === sayi4); // false yazar

sayi3 = sayi3 + 5; // toplama
console.log(sayi3);
sayi3 = sayi3 + sayi4; // string ile int birleştirme
console.log(sayi3);

// Birleştirme Operatörü +
let ogrenci = "Nazlı";
let ogrenciYas = 25;
console.log("Öğrenci Adı: " + ogrenci + ", Öğrenci Yaşı:" + ogrenciYas);
