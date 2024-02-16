const Sequelize = require("sequelize");

const sequelize = new Sequelize('OCTALOGIC_TECH', 'root', 'root@123', {
  dialect: "mysql",
  host: "localhost",
  });

module.exports = sequelize;