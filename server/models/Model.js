const Sequelize = require("sequelize");
const database = require("../database");
const Vehicle = require('./vehicle')
const Model = database.define("model", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  uniqueNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  vehicleType: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Vehicle,
      key: 'name',
    }
}
  
});

module.exports =  Model;