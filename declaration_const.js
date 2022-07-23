/**
 * Const
 * 
 * 1. Biasanya digunakan untuk data yang bersifat konstan atau tidak berubah 
 * 2. Const tidak bisa ditimpa (re-assign)
 */
// contoh penggunaan const
const YOUTUBE_URL = "https://youtube.com"
const video_link = YOUTUBE_URL+"?v=123qwe"
console.log(video_link)

// contoh penggunaan const di dalam scope
const PHI = 3.14 // <-- PHI berada di dalam global scope

function hitungKeliling(diameter) {
    const r = diameter/2 // <-- r berada di dalam function scope
    
    return PHI * r * r
}

// contoh kesalahan penggunaan const
const contoh_const_salah = "https://youtube.com"
contoh_const_salah = "https://google.com" // <-- re-assign ❌
contoh_const_salah = contoh_const_salah.replace("https://", "www") // <-- re-assign juga ❌