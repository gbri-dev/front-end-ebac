document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault()

       
        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.random() * numeroMaximo
        document.getElementById('resultado-sorteado').innerText = Math.round(numeroAleatorio)
        document.querySelector('.resultado').style.display = 'block'
    })
})