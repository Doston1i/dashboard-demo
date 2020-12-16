module.exports = {
  HOST: "localhost", // Replace it with your own host address
  USER: "doston", // Replace with your own username
  PASSWORD: "12345", // Replace with your own password
  DB: "nodelogin",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
