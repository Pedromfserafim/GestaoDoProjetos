import { URL } from "../data/api.js";

export async function GET() {
    try {
        const response = await fetch(URL);
        
        // Corrigido: usando a variável 'response' em vez de 'resposta'
        if (!response.ok) {
            throw new Error(`Erro ao carregar: ${response.status}`);
        }

        const dados = await response.json();

        console.log("Dados carregados", dados);
        return dados; // Geralmente funções GET retornam os dados para quem a chamou

    } catch (erro) { // Corrigido: declarado o parâmetro 'erro'
        console.error("Falha na requisição:", erro);
    }
}
GET();