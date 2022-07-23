/**
 * Biasanya digunakan untuk kondisi yang sulit diprediksi
 * Biasanya trycatch menjadikan program lebih safe
 */

// akan menampilkan data dari API karena url benar
try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    res = await res.json()

    console.log(res)
} catch (error) {
    throw new Error(error)
}

// akan menampilkan pesan error karena url api salah
try {
    let res = await fetch("https://jsonplaceholder.typicode.cox/users")
    res = await res.json()

    console.log(res)
} catch (error) {
    throw new Error(error)
}