module.exports = {
  host: "localhost",
  user: "root",
  pass: "",
  db: "node_with_mysql",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};