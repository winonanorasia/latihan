/**
 * Looping akan terus dilakukan selama kondisinya true
 */

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]

let a = 0
let b = alphabet.length - 1

while (a < b) { // looping akan terus dilakukan selama nilai a < b
    const temp = alphabet[a]
    alphabet[a] = alphabet[b]
    alphabet[b] = temp

    a++
    b--
}

console.log(alphabet) // mengembalikan kebalikan dari alphabet