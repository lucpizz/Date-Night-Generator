module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define('Date', {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });
  return Date;
};

