const db = require("../models");
const Students = db.students;
const Op = db.Sequelize.Op;

const barChartData = [];

exports.create = (req, res) => {
  if (!req.body.firstname) {
    res.status(400).send({
      message: "Content can not be empty !",
    });
    return;
  }

  const student = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    grade: req.body.grade,
  };

  Students.create(student)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Students",
      });
    });
};

exports.findAll = (req, res) => {
    Students.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Students",
      });
    });
};

exports.findIdByGrade = (req, res) => {
  const grade = req.params.grade;
  Students.find({where: { grade: grade },}).select('firstname').then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving Students",
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Students.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Students with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Students.update(req.body, {
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Students was updated successfully",
      });
    } else {
      res.send({
        message: `Cannot update Students with id=${id}`,
      });
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Students.destroy({
    where: { id: id },
  }).then((data) => {
    if (data) {
      res.send({
        message: "Students was delete successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Students with id=${id}`,
      });
    }
  });
};

exports.findAllBarChart = (req, res) => {
  const grade = req.params.grade;
  Students.findAll({where: { grade: grade },})
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occured while retrieving Students",
    });
  });
};