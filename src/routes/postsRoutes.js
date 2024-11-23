import express from "express";
import listarPosts from "../controllers/postsControllers.js";


const routes = (app => {
  // Permite que o Express entenda requisições JSON
  app.use(express.json());
  
  // Rota GET para buscar todos os posts
  app.get("/posts", listarPosts);
  
  //busca post por id
  //app.get("/posts/:id", listarPostsPorID);
})

export default routes;