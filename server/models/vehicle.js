const Sequelize = require("sequelize");

const database = require("../database");

const VehicleType = database.define("vehicle_type", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports =  VehicleType;