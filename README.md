# GestaoDoProjetos
Este é um exercicio para a Master D. O Objetivo é desenvover um MPV de um waeapp de gestão de projetos em TypeScript

# Rodar o sistema

## 1. Instalar o node
        1.1. Abra o terminal.
        1.2. Verificar se já está instalado:                    node -v
        1.3. Se não estiver instalado:
                No Windows: Execute no PowerShell:              winget install OpenJS.NodeJS.LTS 
                No Linux: Utilize o nvm executando:             nvm install --lts.
                No macOS: Execute (se utilizar o Homebrew):     brew install node .
        1.4. Após a instalação: Feche e abra o terminal novamente para atualizar as variáveis de ambiente.
        1.5. Validar a instalação: Rode node -v e npm -v para confirmar que ambos estão prontos para uso.


        
## 2. Instalar o JSON server
        2.1. Abrir o terminal.
        2.2. Executar:              npm install -g json-server
        2.3. Iniciar o servidor:    json-server --watch data/content.json



## 3. Instalar o "live server preview" dentro do SVCode
        3.1. Barra lado esquerdo clicar:    Extensions
        3.2. Na barra de pesquisa:          Live Server from "Ritwick Dey"
        3.3. Instalar
        3.4. ir na pasta do projeto, no index.html clicar direito do mouse e clicar "Open with Live Server"

