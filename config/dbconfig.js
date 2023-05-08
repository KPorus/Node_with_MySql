module.exports = {
  host: process.env.host,
  user: process.env.user,
  pass: process.env.pass,
  db: process.env.db,
  dialect: process.env.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};