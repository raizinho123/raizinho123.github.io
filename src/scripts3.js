document.addEventListener('DOMContentLoaded', () => {
    const input1F = document.getElementById('input1F')
    const enviarF = document.getElementById('enviarF')
    const P = document.getElementById("FIM")
    input1F.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            armazenar()
        }
    })
    function armazenar() {
        const valor = input1F.value
        if (valor == 'estrela do mar') {
            P.innerText = `Você concluiu o desafio, Parabéns!`
        }
    }
})