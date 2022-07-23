// tipe data referensi
// jika referensi diubah, maka larik akan berubah
let larik = ["Kambing", "Gajah", "Kucing", "Harimau"] // array
let referensi = larik
referensi.splice(0, 1) // Kambing dihilangkan
console.log(larik) // Data kambing di larik ikut hilang

// tipe data bukan referensi
let larik_lagi = ["Kambing", "Gajah", "Kucing", "Harimau"]
let bukan_referensi = [...larik_lagi]
bukan_referensi.splice(0, 1) // kambing dihilangkan
console.log(larik_lagi) // Data kambing di larik_2 tidak hilang


// referensi berlaku juga untuk objek
let objek = {
    nama: "Kambing",
    wafat: "Idul Adha",
    berat: 30
}
let referensi_objek = objek
delete referensi_objek.berat
console.log(referensi_objek) // data berat akan hilang