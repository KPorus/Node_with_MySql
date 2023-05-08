const sequelize = require("./index.js");
const Sequelize = require("sequelize");
module.exports = sequelize.define(
  "user",
  {
    name:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull:false,
        primaryKey:true,
        onUpdate: "CASCADE",
    },
    pass:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
        primaryKey:true,
    }
  },
  {
    timestamps: false,
  }
);
