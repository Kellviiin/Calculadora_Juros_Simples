const enviar = document.querySelector('button')
enviar.addEventListener('click', calcJuros)

function calcJuros(){
    const capital = document.querySelector('#capital')
    const tempo = document.querySelector('#tempo')
    const taxa = document.querySelector('#taxa')
    const escrita = document.querySelector('p')
    let resultado = capital.value * tempo.value * (taxa.value/100)
    escrita.innerText = Number(resultado).toFixed(2)
}





