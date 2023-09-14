require("dotenv").config();
const express = require("express");
const { sequelize, TestConnection } = require("../database/database");
const ejs = require("ejs");
const app = express();
const port = process.env.PORT;

//configurar EJS como motor de plantilla
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/inicio", function (req, res) {
  res.render("inicio", {});
});

app.get("/posts/", function (req, res) {
  res.render("posts", {});
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
app.post("/newpost/", function (req, res) {
  const { foto, descripcion } = req.body;
  res.send("Creado!");
});

TestConnection();

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
