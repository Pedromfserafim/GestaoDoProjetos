
const btn = document.getElementById("botao_03");
var estado = "AZUL";

document.addEventListener('DOMContentLoaded', () => {
    btn.style.backgroundColor = '#0d6efd';
    estado = "AZUL";
});

btn.addEventListener("click", function() {
    // Usando === para comparar
    if (estado === "AZUL") {
        btn.style.backgroundColor = '#ff5733';
        estado = "VERMELHO";
    } else {
        // Como só existem dois estados, podemos usar apenas 'else'
        btn.style.backgroundColor = '#0d6efd';
        estado = "AZUL";
    }
});