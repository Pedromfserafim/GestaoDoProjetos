//IMPORTAR O URL BASE DO JSON SERVER
import { URL } from "../data/api.js";




// FUNÇÃO PARA REALIZAR O PATCH
export async function PATCH(id, endpoint, dadosAtualizados) {
    try {
        
        const response = await fetch(`${URL}/${endpoint}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosAtualizados)
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
        console.error(`Erro na requisição PATCH para ${endpoint}:`, erro);
        return null;
    }
}


//DEFINIÇÃO DAS VARIAVEIS DE INPUT
const id = "4";
const endpoint = "usuarios";
const dadosAtualizados = { cargo: "Qualidade" };


// EXECUÇÃO DO PATCH ACIONAMENTO ATRAVES DE BOTAO
document.getElementById("PATCH").addEventListener(`click`, function(){
    PATCH(id, endpoint, dadosAtualizados);
});
































