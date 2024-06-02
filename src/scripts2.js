document.addEventListener('DOMContentLoaded', () => {
    const inputEscondido = document.getElementById('input-escondido')
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const SUCESS_GAME = document.getElementById('SUCESS_GAME')
    const enviarresultados = document.getElementById('enviar-resultados')
    const pEscodido = document.getElementById('pEscondido')
    inputEscondido.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            armazenarValor()
        }
    })
    enviarresultados.addEventListener('click', (event) => {
            armazenarValor2()
    })
    input1.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            armazenarValor2()
        }
    })
    input2.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            armazenarValor2()
        }
    })
    function armazenarValor() {
        const valor = inputEscondido.value;
        if (valor === "a special day") {
            pEscodido.style.opacity = '1'
            input1.style.opacity = '1'
            input2.style.opacity = '1'
            enviarresultados.style.opacity = '1'
        } else {
            inputEscondido.value = ''
        }
    }
    function armazenarValor2() {
        if (input1.value.toLowerCase() == "genshin impact" || input1.value.toLowerCase() == "sky" && input2.value.toLowerCase() == 'genshin impact' || input2.value.toLowerCase() == 'sky') {
            SUCESS_GAME.innerText = `Você avançou para a próxima fase, Clique aqui`
        }
    }
})
