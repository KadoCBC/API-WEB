GUIA DE DENSENVOLVIMENTO DO PROJETO PESSOAL COM NOME: 

-> PRIMEIRA ETAPA - instalando frameworks
1. iniciar projeto NODE.JS no terminal |  npm init -y
2. inciar a biblioteca express no server | npm i express

-> SEGUNDA ETAPA - versionamento do codigo
1. criar arquivo gitignore | criar arquivo .gitignore
2. iniciar projeto no git | git init
3. add arquivos para stage area| git add .
4. gerar commit | git commit -m ""
5. 'conectar' para projeto no Github | git remote add origin https://github.com/KadoCBC/API-WEB.git
6. enviar o codigo | git push -u origin main

-> 3 ETAPA - Iniciando server API
1. No arquivo server.js | inserir codigo
2. iniciar server no terminal | node server.js
2. Caso erro no package.json| adicionar linha: type: "module"

-> 4 ETAPA - Criando Banco de dados (MY SQL)
1. Abrir My SQL command line | 'create database projeto;'
2. comandos uteis | show databases;   use 'nome_banco';

-> 5 ETAPA - Criando tables no banco atraves de codigo
1. instalar Sequelize | npm install --save sequelize
2. instalar modulo para mysql | npm install --save mysql2
3. Criar pasta models | pasta onde ficara o modelo do banco
4. No arquivo db.js | inserir codigo
5. No arquivo Usuario.js | inserir codigo de criação de uma table

->ETAPA EXTRA - arquvo .env
1. instalar biblioteca dotenv | npm install dotenv
2. criar variaveis que queira ocultar | no .env
3. lembrar de add .env no gitignore