require("dotenv").config();
const express = require("express");
const ejs = require('ejs')
const app = express();
const port = process.env.PORT;

//configurar EJS como motor de plantilla
app.set("view engine", "ejs");
app.set('views', 'views')

app.get("/", function (req, res) {
  res.render("inicio", { nombre: "Martin" });
});

app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
