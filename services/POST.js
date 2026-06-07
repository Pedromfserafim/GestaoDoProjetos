//IMPORTAR O URL BASE DO JSON SERVER
import { URL } from "../data/api.js";




// FUNÇÃO PARA REALIZAR O POST
export async function POST(novoObjeto, endpoint) {
    try {
        
        const response = await fetch(`${URL}/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoObjeto)
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar ${endpoint}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Salvamento automático para garantir que a informação persista
        localStorage.setItem(endpoint, JSON.stringify(data));

        console.log(`Dados obtidos de ${endpoint}:`, data);
        return data;

    } catch (erro) {
        console.error(`Erro na requisição POST para ${endpoint}:`, erro);
        return null;
    }
}




// DEFINIÇÃO DAS VARIAVEIS DE INPUT
const novoObjeto = { "nome": "Ana Silva", "cargo": "Desenvolvedora" };
const endpoint = "usuarios";



// EXECUÇÃO DO POST ACIONAMENTO ATRAVES DE BOTAO
document.getElementById("POST").addEventListener(`click`, function(){
    POST(novoObjeto, endpoint);
});
