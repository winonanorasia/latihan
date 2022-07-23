/**
 * Destruktif biasanya digunakan agar kode lebih bersih
 * Bisa digunakan dari array atau object
 */

const array = ["Apel", "Mangga", "Anggur", "Leci", "Jeruk"]
const [pertama, kedua] = array
console.log(pertama, kedua) // harusnya menampilkan apel mangga

// jika ingin dilewat, kosongkan saja
const [,,ketiga] = array
console.log(ketiga) // harusnya menampilkan anggur

const object = {
    jenis: "Alpukat",
    berat: 10,
    harga_per_kg: 25000,
    asal: "Chili"
}
const DISKON = 15
const {jenis, berat, harga_per_kg} = object

const kalkulasiHarga = (beratnya, harganya) => {
    const total = beratnya * harganya
    const diskon = total/100 * DISKON

    return total - diskon
}

console.log(`Ini adalah ${jenis} sebanyak ${berat}, jadi total harga adalah Rp. ${kalkulasiHarga(berat, harga_per_kg)}`)

// bisa juga diubah nama key-nya
const {harga_per_kg: harga} = object
console.log(harga)