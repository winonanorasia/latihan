const penerbangan = [
    {
        maskapai: "Garuda Indonesia",
        harga: 1500000,
        tujuan: "Jakarta - Bali"
    },
    
    {
        maskapai: "Lion Air",
        harga: 800000,
        tujuan: "Jakarta - Bali"
    },
    
    {
        maskapai: "Air Asia",
        harga: 750000,
        tujuan: "Jakarta - Singapore"
    },
    
    {
        maskapai: "Citilink",
        harga: 780000,
        tujuan: "Jakarta - Singapore"
    },
    
    {
        maskapai: "Etihad Airways",
        harga: 8500000,
        tujuan: "Jakarta - Dubai"
    },
]

// pake arrow function
const liburanAlaMisQueen = () => {
    // cari yang murah
    return penerbangan.sort((a, b) => a.harga - b.harga)[0]
}

// pake arrow function
const liburanAlaSultan = () => {
    // cari yang mahal
    return penerbangan.sort((a, b) => b.harga - a.harga)[0]
}

// pake arrow function lebih simpel
const liatDariYangMurah = () => penerbangan.sort((a, b) => a.harga - b.harga)

// pake basic function
function liatNamaMaskapaiDoang() {
    return penerbangan.map((item) => item.maskapai)
}

// pake variable function
let liatTujuanDoang = function() {
    return penerbangan.map((item) => item.tujuan)
}

console.log(liburanAlaMisQueen())
console.log(liburanAlaSultan())
console.log(liatDariYangMurah())
console.log(liatNamaMaskapaiDoang())
console.log(liatTujuanDoang())