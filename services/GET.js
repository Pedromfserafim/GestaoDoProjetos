//IMPORTAR O URL BASE DO JSON SERVER
import { URL } from "../data/api.js";


// FUNÇÃO PARA REALIZAR O GET
export async function GET(endpoint) {
    try {
        
        const response = await fetch(`${URL}/${endpoint}`);
        
        if (!response.ok) {
            throw new Error(`Erro ao buscar ${endpoint}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Salvamento automático para garantir que a informação persista
        localStorage.setItem(endpoint, JSON.stringify(data));

        console.log(`Dados obtidos de ${endpoint}:`, data);
        return data;

    } catch (erro) {
        console.error(`Erro na requisição GET para ${endpoint}:`, erro);
        return null;
    }
}




// DEFINIÇÃO DAS VARIAVEIS DE INPUT
const endpoint = "usuarios";



// EXECUÇÃO DO GET ACIONAMENTO ATRAVES DE BOTAO
document.getElementById("GET").addEventListener(`click`, function(){
    GET(endpoint);
});
