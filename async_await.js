/**
 * Asal dari javascript adalah synchronus 
 * SYNCHRONUS artinya eksekusi kode berurutan dari atas ke bawah
 * 
 * Namun ketika mengeksekusi kode yang membutuhkan return lebih lama, javascript bersifat asynchronus
 * ASYNCHRONUS artinya bisa saja kode yang di bawah kode yang butuh return lebih lama, lebih dulu dieksekusi
 * 
 */

// bermasalah tanpa async await
function fetchData() {
    let data = []
    
    let res = fetch("https://jsonplaceholder.typicode.com/users") // <-- yang ini proses lebih lama, akan dilewat
    
    data = res // <-- yang ini proses lebih cepat, lebih dulu dieksekusi

    console.log(res)
}

// dengan async await ✅
async function fetchDataDenganAsync() {
    let data = []
    
    let res = await fetch("https://jsonplaceholder.typicode.com/users") // <-- yang ini proses lebih lama, tapi akan ditunggu
    res = await res.json()

    data = res // walaupun ini lebih cepat akan menunggu yang sebelumnya

    console.log(res)
}

fetchData()
fetchDataDenganAsync()