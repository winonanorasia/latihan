const hp = [
    {
        merk: "Xiaomi",
        harga: 2000000
    },
    {
        merk: "Samsung",
        harga: 5000000
    },
    {
        merk: "iPhone",
        harga: 17000000
    },
    {
        merk: "Oppo",
        harga: 3000000
    },
    {
        merk: "Huawei",
        harga: 6000000
    },
    {
        merk: "Poco",
        harga: 4000000
    }
]

// menemukan 1 merk hp
const cari = hp.find(item => item.merk === "Xiaomi") // akan muncul Xiaomi

// menemukan 2 merk hp
const cari2 = hp.filter(item => item.merk === "Xiaomi" || item.merk === "Poco") // akan muncul Xiaomi & Poco

// mengurutkan berdasar harga termurah 
const urutkan = hp.sort((a, b) => a.harga - b.harga)

// hanya menampilkan merk HP
const merk = hp.map(item => item.merk)

// menyambung merk dengan koma
const sambung = merk.join(', ')

//reverse yang paling gampang, kebalikannya
let arr = [1, 3, 4, 10, 11];

let reversed = arr.reverse()
console.log(reversed)

//filter
let filtered = arr.filter((item) => item > 5)
console.log(filtered)

let find = arr.find((item) => 11)
console.log(find)

// and more ....