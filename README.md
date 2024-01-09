# FullCycle 3.0

Este repositorio foi criado para conter os arquivos do desafio, do modulo de docker do curso fullcycle.

### Descrição do desafio
> Você terá que crirar um docker composer que conect mysql, node e ngix:

>**Requisito:** Quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

>O retorno da aplicação node.js para o nginx deverá ser:
><h1>Full Cycle Rocks!</h1>
>- Lista de nomes cadastrada no banco de dados.

>Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

### Instalação e Execução da Aplicação
Para instalar a aplicação, execute os seguintes comandos:
```
git clone https://github.com/SrAmaral/dokcer-compose-fullcycle.git docker-compose
```
```
cd docker-compose
``` 

```
dokcer-compose up -d
``` 

Pronto!
<br/>
<br/>