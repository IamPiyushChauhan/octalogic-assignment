const Sequelize = require("sequelize");
const database = require("../database");
const Model = require('./Model')
const Slot = database.define("slot", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  startTime: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  endTime: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  
  vehicleID: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Model,
      key: 'uniqueNumber',
    }
}
  
});



module.exports =  Slot;