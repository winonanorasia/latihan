const waktu = new Date()
const jam = waktu.getHours()

if (jam >= 0 && jam < 4) {
    console.log("Ini tengah malam, tidak tidur?")
} else if (jam >= 4 && jam < 11) {
    console.log("Selamat pagi")
} else if (jam >= 11 && jam < 16) {
    console.log("Selamat siang")
} else if (jam >= 16 && jam < 18) {
    console.log("Selamat sore")
} else {
    console.log("Selamat malam")
}