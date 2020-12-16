const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define("student", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    grade: {
        type: Sequelize.STRING,
      },
  });
  return Students;
};
