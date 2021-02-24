module.exports = (sequelize, DataTypes) => {
  const Dates = sequelize.define("Dates", {
    name: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
  });
  return Dates;
};

// module.exports = (sequelize, DataTypes) => {
//   return sequelize.define("Date", {
//     name: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       validate: {
//         len: [1],
//       },
//     },
//     body: {
//       type: Sequelize.TEXT,
//       allowNull: false,
//       len: [1],
//     },
//   });
// };
