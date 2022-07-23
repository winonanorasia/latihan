/**
 * Let
 * 
 * 1. Biasanya digunakan untuk data yang bersifat dinamis
 * 2. Bisa ditimpa (re-assign)
 * 3. Tidak bisa diakses dari luar scope (function scope atau block scope)
 * 4. Lebih baik daripada var
 */

// contoh penggunaan let ✅
let nama = "John Doe Suryodiningrat"
nama = "John Doe Saja" // <-- re-assign
nama = nama.replace("John", "Jhon") // <-- re-assign

// berbeda dari var, let tidak bisa diakses dari luar function scope
function rumusLingkaran(diameter) {
    // di dalam bracket ini adalah scopenya
    let r = diameter/2
    return 3.14 * r * r
}
console.log(r) // <-- tidak bisa ❌

// berbeda dari var, let tidak bisa diakses dari luar block scope
let angka = 100
if (angka > 50) {
    // di dalam bracket ini adalah scopenya
    let luas = rumusLingkaran(angka)
    console.log(luas)
}
console.log(r) // <-- tidak bisa ❌