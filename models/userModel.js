module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender:{
      type: DataTypes.STRING,
      alertable: false,
    }
  });

  return user;
};
