# Guia de execução do Backend e Frontend

Este guia fornece instruções sobre como executar o Backend e o Frontend de um aplicativo usando Express.js como framework para o Backend. Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina antes de prosseguir.

## Backend

### Configuração do Banco de Dados

1. No diretório `db`, localize o arquivo `index.js` e abra-o em um editor de texto.
2. Verifique se as configurações do banco de dados estão corretas, como nome de usuário, senha, nome do banco de dados etc. Faça as alterações necessárias de acordo com a sua configuração.
3. Certifique-se de ter o PostgreSQL instalado e em execução em sua máquina.
4. No mesmo diretório `db`, localize o arquivo `schema.sql`. Este arquivo contém o esquema do banco de dados. Crie um novo banco de dados no PostgreSQL com o mesmo nome especificado no arquivo `index.js` e execute o script contido em `schema.sql` para criar as tabelas necessárias.

### Instalação das Dependências e Execução

1. Abra o terminal e navegue até o diretório do Backend.
2. Execute o comando `npm install` para instalar as dependências do projeto.
3. Após a conclusão da instalação, execute o comando `node src/db/index.js` em um terminal separado para iniciar o servidor do banco de dados.
4. Em outro terminal, execute o comando `node index.js` para iniciar o servidor Backend.
5. O Backend agora está em execução e pronto para receber solicitações.

## Frontend

### Instalação das Dependências e Execução

1. Abra o terminal e navegue até o diretório do Frontend.
2. Execute o comando `npm install` para instalar as dependências do projeto.
3. Após a conclusão da instalação, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento do Frontend.
4. O Frontend agora está em execução e pode ser acessado em um navegador da web.

Certifique-se de que ambos, o Backend e o Frontend, estejam em execução simultaneamente para que o aplicativo funcione corretamente.
