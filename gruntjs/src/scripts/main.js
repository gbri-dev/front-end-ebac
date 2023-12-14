document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('contador').textContent = 0
})
    let contador = 0;
    let intervalId = 0;

    const iniciar = ()=> {
        intervalId = setInterval(function() {
            document.getElementById('contador').textContent = contador += 1;
        }, 1000);
    };

    const parar = () => {
        clearInterval(intervalId);
    };

    const reset = () => {
        parar();
        contador = 0;
        document.getElementById('contador').textContent = contador;
    };    
      
