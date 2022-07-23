/**
 * Biasanya digunakan untuk data yang sederhana
 */

const kode_negara = "au"

let mata_uang = "USD"

// bad code ❌
if (kode_negara == "au") {
    mata_uang = "AUD"
} else if (kode_negara == "id") {
    mata_uang = "IDR"
} else if (kode_negara == "sa") {
    mata_uang = "SAR"
} else if (kode_negara == "fr" || kode_negara == "ge") {
    mata_uang = "EUR"
}

// good code ✅
switch (kode_negara) {
    case "au":
        mata_uang = "AUD";
        break;
    case "id":
        mata_uang = "IDR";
        break;
    case "sa":
        mata_uang = "SAR";
        break;
    case "fr":
    case "ge":
        mata_uang = "EUR";
        break;
    default: 
        mata_uang = "USD";
}

console.log(mata_uang)