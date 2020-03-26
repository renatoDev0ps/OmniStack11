const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
* Rota / Recurso
*/

/**
* Métodos HTTP
* 
* GET: Buscar/listar uma informação do backend
* POST: Criar uma informação no backend
* PUT: Alterar uma informação no backend
* DELETE: Deletar uma informação no backend
*/

/**
* Tipos de Parâmetros
* 
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para 
*/

/**
* SQL: Postgres, MySQL, SQLite, Oracle
* NoSQL: MongoDB, etc
*/

/**
* Driver: SELECT * FROM user
* Query Builder: table('users').select('*').where();
*/

app.listen(3333);