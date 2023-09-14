require("dotenv").config();
const express = require("express");
const { TestConnection } = require("../database/database");
const postModel = require("../models/post.model");

const app = express();
const port = process.env.PORT;

//configurar EJS como motor de plantilla
app.set("view engine", "ejs");
app.set("views", "views")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/inicio", function (req, res) {
  res.render("inicio", {  });
});

app.get("/posts/", async function (req, res) {
  const posts = await postModel.findAll();
  res.render("posts", {posts});
});

app.get("/acerca_de/", function (req, res) {
  res.render("acerca_de", {});
});

app.get("/nuevo_post/", function (req, res) {
  res.render("nuevo_post", {});
});

app.get("/newpost/", function (req, res) {
  res.render("newpost", {});
});

app.post("/newpost/", async function (req, res) {
  const { foto, descripcion } = req.body;
  try {
    const newPost = await postModel.create({
      descripcion: descripcion,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdegjeAZ4eIPX5M31JtBYbW8rYsUrkmrVpog&usqp=CAU",
    });

    if (newPost) res.send("Creado! " + newPost.descripcion);
  } catch (error) {
    res.send("Se produjo un error al cargar el post");
  }
});

TestConnection();

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
