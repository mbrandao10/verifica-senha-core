# verifica-senha-core

# verifica-senha-core

## 1. Sobre:
- Este projeto tem o seu código aberto, de forma que qualquer pessoa pode vê-lo, fazer um fork, ou updates.

- Este projeto foi desenvolvido em nodeJS com o objetivo de fazer validação de uma senha, e gravar essa senha em um banco de dados MongoDB;

- Este projeto contém uma api com conecxão com banco de dados mongoDB, com arquiteruta MVC (model, view, Controller), onde o view é a aplicação front-end localizada neste link: [Baixe e faça a instalação.](https://github.com/mbrandao10/verifica-senha-front);

# AVISO:
- A regra de negócio para validação da senha foi inplementada no Front-end da aplicação , então qualquer requisição de senha que você fizer via postman ou qualquer API Client, será gravada com sucesso, pois o CORS ainda não foi implementado, então a aplicação aceitará requisição de qualquer destino.

- Os testes unitarios, ainda não foram implementados nesta versão.


## 2. Instalação e configuração de ambiente:

- Instale o NodeJs, caso não tenha o node instalado, vá ate o site oficial do NodeJs ou clique no link e [Baixe e faça a instalação.](https://nodejs.org/en/download);

- Você precisará ter instalado também o MongoDB, 
caso não tenha instalado na sua maquina e sinta dificuldades para a instalação e configuração, 
deixarei o link com de referencia: [Baixe e faça a instalação aqui.](https://www.youtube.com/watch?v=skK5xj-CK-Q);

- Clone ou baixe o projeto;
- Vá até a raiz do seu projeto e instale as dependencias, com **npm install** ou só **npm i**;



## 3. Como usar?

- Para iniciar va na pasta raiz do seu projeto pelo terminal ou no terminal integrado de sua IDE e digite o comando **npm start**
- O projeto será iniciado na url **http://localhost:3005**


