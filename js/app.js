// incorporo el dom

console.log(document)
document.querySelector('h2').textContent = 'primer cambio desde JS'
console.log(document.querySelector('h2'))

console.log(document.querySelectorAll('.subtitulo'))

let subtitulos = document.querySelectorAll('.subtitulo')
for (const subtitulo of subtitulos) {
    subtitulo.innerHTML = 'segundo cambio';
}

const texto = document.getElementById('texto')
texto.textContent = 'tercer  cambio desde js'


document.querySelector('button').textContent = 'oprimir, cuarto cambio'