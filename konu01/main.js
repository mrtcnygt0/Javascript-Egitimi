confirm("Üyelik kaydınızı onaylıyor musunuz?");

console.log("İşlem tamamlandı");

/*
JavaScript Fata Türleri
A) İlkel veri türleri (Primitiye data types)
    1-String veri
    2-Integer : Veri türü olarak Number değerini gösterir
    3-Float
    4-Boolean : Mantıksal veri türüdür. Evet-Hayır
    5-Undefined
    6-Null
    7-Bigint
    8-Symbol Benzersiz ve değiştirlmeyen değerler oluşturmak için kullanılan veri türüdür.
        Örnek: let id = Symbol("Benzersiz")
B) İlkel olmayan (Gelişmiş) Veri Türleri(Non-Primitive data teypes)
1-Arrays(Diziler) : Eğer bir değişkene birden fazla değer ataması yapılacaksa kullanılır.
    Array(parametreler) ya da [ ] tanımlanır.
2-Object(Nesneler) : Birden fazla birbiriyle bağlantılı değer ataması yapılacaksa kullanılır. {} ile yazılır.
3-Functions(Fonksiyonlar) : Bir işlem grubu oluşturmak için kullanılan kod blokları
    İşlem sonucunda çıkan değer döndürür
*/

console.log(typeof "Merhaba"); //String veri türü
console.log(typeof 25); //Number(integer) veri türü
console.log(typeof "36"); //String veri türü
console.log(typeof true); //Boolean veri türü
console.log(typeof undefined); //Undefined veri türü
console.log(typeof null); //Null veri türü
console.log(typeof 0.5); //Number(float) veri türü

document.writeln("Web Sayfasına Yazar");
// document.write("Merhaba) // asekron çalıştığı için tüm algoritmaları durdurulur.
