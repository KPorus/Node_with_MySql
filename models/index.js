const dbconfig = require("../config/dbconfig.js")

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize(
  dbconfig.db,
  dbconfig.user,
  dbconfig.pass,
  {
    host:dbconfig.host,
    dialect: dbconfig.db,
    operatorAliases: false,
  },
  dbconfig.pool
);

sequelize.authenticate().then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err.message)
})

const DB = {}
DB.Sequelize = Sequelize
DB.sequelize = sequelize

DB.users = require("./userModel.js")(sequelize,DataTypes)

DB.sequelize.sync({force: false}).then(()=>{
    console.log("sync database done")
})
module.exports = DB;