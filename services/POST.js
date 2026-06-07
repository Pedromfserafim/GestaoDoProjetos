import { URL } from "../data/api.js";

export async function POST(novoObjeto, endpoint) {
    try {
        const response = await fetch(`${URL}/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoObjeto)
        });
        
        if (!response.ok) {
            // Ajustado para 'enviar' para ficar coerente com o método POST
            throw new Error(`Erro ao enviar dados: ${response.status}`);
        }

        const dados = await response.json();

        console.log("Dados gravados com sucesso:", dados);
        return dados; // Importante para confirmar o que foi salvo

    } catch (erro) {
        console.error("Falha na requisição POST:", erro);
        throw erro; // Repassa o erro para quem chamou a função poder tratar
    }
}

// Exemplo de uso:
const novoObjeto = { "nome": "Ana Silva", "cargo": "Desenvolvedora" };

