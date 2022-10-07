// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

let newId = 1;

const server = express();
// para poder leer el body, necesito hacer esto
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;

  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }

  const newPost = {
    id: newId,
    author,
    title,
    contents,
  };

  posts.push(newPost);
  newId++;
  res.json(newPost);
});

server.post("/posts/author/:author", (req, res) => {
  const { title, contents } = req.body;
  const { author } = req.params;

  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }

  const newPost = {
    id: newId,
    author,
    title,
    contents,
  };

  posts.push(newPost);
  newId++;
  res.json(newPost);
});

server.get("/posts", (req, res) => {
  const { term } = req.query;

  if (term) {
    const filtrado = posts.filter(
      (post) => post.title.includes(term) || post.contents.includes(term)
    );
    return res.json(filtrado);
  }

  if (!term) {
    return res.json(posts);
  }
});

server.get("/posts/:author", (req, res) => {
  const { author } = req.params;

  const filtrado = posts.filter((post) => post.author === author);

  if (filtrado.length === 0) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post del autor indicado",
    });
  }
  res.json(filtrado);
});

server.get("/posts/:author/:title", (req, res) => {
  const { author, title } = req.params;

  const filtrado = posts.filter(
    (post) => post.author === author && post.title === title
  );

  if (filtrado.length === 0) {
    res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post con dicho titulo y autor indicado",
    });
  }

  res.json(filtrado);
});

server.put("/posts", (req, res) => {
  const { id, title, contents } = req.body;

  if (!id || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para modificar el Post",
    });
  }

  //   const filtrado = posts.filter((post) => post.id === id);

  //   if (filtrado === 0) {
  //     return res.status(STATUS_USER_ERROR).json({
  //       error: "No se encuentra el id necesario para modificar el Post",
  //     });
  //   }

  //   filtrado.title = title;
  //   filtrado.contents = contents;

  //   res.json(filtrado);

  const postFiltado = posts.find((post) => post.id === id);

  if (!postFiltado) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No hay post con ese id",
    });
  }

  postFiltado.title = title;
  postFiltado.contents = contents;

  res.json(postFiltado);
});

server.delete("/posts", (req, res) => {
  const { id } = req.body;
  const post = posts.find((post) => post.id === id);

  if (!id || !post) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se encuentra post con ese id" });
  }

  posts = posts.filter((post) => post.id !== id);
  res.json({ success: true });
});

server.delete("/author", (req, res) => {
  const { author } = req.body;

  if (!author) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se encuentra el autor" });
  }

  const postAutor = posts.filter((post) => post.author === author);

  if (postAutor.length === 0) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe el autor indicado" });
  }
  posts = posts.filter((post) => post.author !== author);
  res.json(postAutor);
});

module.exports = { posts, server };
