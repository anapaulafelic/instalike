import express from 'express'; // Importa o framework Express para criar a aplicação web
import routes from './src/routes/postsRoutes.js';

// Cria uma instância do Express
const app = express();

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("servidor escutando...");
});
