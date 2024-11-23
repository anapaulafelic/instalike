import getTodosPosts from "../models/postsModel.js";

export default async function listarPosts(req, res) {
  // Chama a função para buscar os posts do banco de dados
  const posts = await  getTodosPosts;
  // Envia os posts como resposta em formato JSON com status 200 (sucesso)
  res.status(200).json(posts);
}

/* export default async function listarPostsPorID(req, res) {
  const index = await buscarpostPorId(req.params.id);
  res.status(200).json(posts[index]);
} */