const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const routes = require("./app/routes");

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const db = require("./app/models");
db.sequelize.sync();

app.use("/api/", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
