//IR A LA DOCU DE SEQUALIZE
const { DataTypes } = require("sequelize");
//no utilizo la docu.Importo desde mi conexion a la base de datos
const { sequelize } = require("../database/database");

const post = sequelize.define(
  "post",
  {
    // Model attributes are defined here
    foto: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    timestamps: false,
    tableName: "posts",
  }
);

module.exports = post;
