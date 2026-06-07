//IMPORTAR O URL BASE DO JSON SERVER
import { URL } from "../data/api.js";




// FUNÇÃO PARA REALIZAR O DELETE
export async function DELETE(id, endpoint) {
    try {
        
        const response = await fetch(`${URL}/${endpoint}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' } 
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
        console.error(`Erro na requisição DELETE para ${endpoint}:`, erro);
        return null;
    }
}



//DEFINIÇÃO DAS VARIAVEIS DE INPUT
const id = "ympqCIky5BQ";
const endpoint = "usuarios";


// EXECUÇÃO DO DELETE ACIONAMENTO ATRAVES DE BOTAO
document.getElementById("DELETE").addEventListener(`click`, function(){
    DELETE(id, endpoint);
});
































