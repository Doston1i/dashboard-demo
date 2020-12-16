const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  Users.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Users",
      });
    });
};

exports.findAll = (req, res) => {
  Users.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Users",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Users.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Users with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Users.update(req.body, {
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Users was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update Users with id=${id}`,
      });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Users.destroy({
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Users was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Users with id=${id}`,
      });
    }
  });
};

exports.findByUsernameAndPassword = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Users.findOne({where: { username: username,  password: password}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Users",
      });
    });
};