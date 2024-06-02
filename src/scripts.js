document.addEventListener('DOMContentLoaded', () => {
const enviar = document.getElementById('enviar')
const input = document.getElementById('numInput')
const button = document.getElementById('enviar')
const escondido = document.getElementById('escondido')
var numerodeacertos = 0
var aviso = document.getElementById('aviso')
const numA = () => {return Math.floor(Math.random() * 101) + 1}
var numeroAdivinha = numA()
valor = null

enviar.addEventListener('keypress', (event) => {
    console.log(event.key)
    armazenarValor()
})
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        armazenarValor()
    }
})
button.addEventListener('click', () => {
    armazenarValor()
})

function armazenarValor() {
    const valor = input.value

    if (valor) {
        if (typeof Number(valor) != 'number') return 
        if (Number(valor) < numeroAdivinha) {
            aviso.innerText = `O número é maior que ${valor}`
        }
        if (Number(valor) > numeroAdivinha) {
            aviso.innerText = `O número é menor que ${valor}`
        }
        if (Number(valor) === numeroAdivinha) {
            aviso.innerText = `Você adivinhou o número correto!!`
            numerodeacertos ++
            console.log(numerodeacertos)
            numeroAdivinha = numA()
        }
    }
    if (numerodeacertos >= 3) {
        escondido.innerText = `clique aqui`
    }
    input.value = ''
}
})