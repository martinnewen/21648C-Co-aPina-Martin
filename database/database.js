const { Sequelize } = require("sequelize");





const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

// conexion
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
});

//TEST CONEXION
const TestConnection = async () => {
  try {
    await sequelize.authenticate();
    
    console.log("La conexion a la base de datos se establecio");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

module.exports = { sequelize, TestConnection };
