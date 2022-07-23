/**
 * 1. Angka pertama adalah 0
 * 2. Angka terakhir adalah angka terbesar yang kurang dari 10 setelah ditambah 1 setiap perulangan
 * 3. Maka angka terakhirnya adalah 9
 * 4. Looping akan berhenti setelah menemukan angka terakhir
 */

for (let i = 0; i < 10; i++) {
    console.log(i)
}

/**
 * 1. Angka pertama adalah 1
 * 2. Angka terakhir adalah 10
 */

 for (let i = 1; i <= 10; i++) {
    console.log(i)
}

/**
 * 1. Angka pertama adalah 0
 * 2. Angka terakhir adalah angka terbesar yang kurang dari 10 setelah ditambah 2 setiap perulangan
 * 3. Maka angka terakhirnya adalah 8
 * 4. Looping akan berhenti setelah menemukan angka terakhir
 * 5. Loop di bawah menghasilkan 0, 2, 4, 6, 8
 */

for (let i = 0; i < 10; i += 2) {
    console.log(i)
}

/**
 * Decrement looping
 * 
 * 1. Angka pertama adalah 10
 * 2. Angka terakhir adalah 0
 */
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

/**
 * 1. Output pertama adalah "anjing"
 * 2. Output terakhir adalah "elang"
 */
const hewan_hewan = ["anjing", "bebek", "cacing", "domba", "elang"]

for (const hewan of hewan_hewan) {
    console.log(hewan)
}

/**
 * 1. Output pertama adalah 0
 * 2. Output terakhir adalah 4
 */
 for (const hewan in hewan_hewan) {
     console.log(hewan)
 }
 